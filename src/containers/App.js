import React, { Component } from 'react';
import '../App.css';
import UrlInput from '../components/UrlInput';
import Subreddits from '../components/Subreddits';
import History from '../components/History';

class App extends Component {
  baseUrl = 'https://www.reddit.com';

  state = {
    redditTopics: [],
    history: []
  }

  urlSubmitHandler = subreddit => {
    console.log('download topics from:', subreddit);
    if (!subreddit) {
      return;
    }

    fetch(`${this.baseUrl}/r/${subreddit}.json`)
      .then(result => result.json())
      .then(jsonResult => {
        const oldTopics = this.state.redditTopics;
        const newData = {};
        newData[subreddit] = this.parseRedditTopics(jsonResult);

        this.setState({
          redditTopics: {
            ...newData, ...oldTopics
          },
          history: [...this.state.history, subreddit]
        });
      })
      .catch(e => console.log(e));
  }

  parseRedditTopics = json => {
    if (!json.data) {
      return [];
    }
    return json.data.children.map(topic => {
      const { title, author } = topic.data
      const url = `${this.baseUrl}/${topic.data.permalink}`;
      return { title, author, url };
    });
  }

  deleteClickHandler = subreddit => {
    const oldData = { ...this.state.redditTopics };
    delete oldData[subreddit];
    this.setState({ redditTopics: oldData });
  }

  render() {
    const subreddits = Object.keys(this.state.redditTopics)
      .map((s, i) => <Subreddits key={i} topics={this.state.redditTopics[s]} name={s} onDeleteClick={() => this.deleteClickHandler(s)} />);

    return (
      <div className="App">
        <UrlInput onSubmit={this.urlSubmitHandler} />
        <History history={this.state.history} />
        {subreddits}
      </div>
    );
  }
}

export default App;
