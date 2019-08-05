import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTopics, deleteSubreddit } from '../actions';

import UrlInput from '../components/UrlInput';
import Subreddits from '../components/Subreddits';
import History from '../components/History';

class App extends Component {
  urlSubmitHandler = subreddit => {
    if (!subreddit) {
      return;
    }
    this.props.fetchSubreddit(subreddit);
  }

  deleteClickHandler = subreddit => {
    this.props.deleteSubreddit(subreddit);
  }

  render() {
    const subreddits = Object.keys(this.props.subreddits)
      .map((s, i) => {
        const sub = this.props.subreddits[s];
        return <Subreddits key={i}
          topics={sub.topics}
          name={s}
          loading={sub.loading}
          onDeleteClick={() => this.deleteClickHandler(s)} />
      });

    return (
      <div className="App">
        <UrlInput onSubmit={this.urlSubmitHandler} />
        <History history={this.props.history} />
        {subreddits}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { subreddits: state.subreddits, history: state.history }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteSubreddit: (subreddit) => { dispatch(deleteSubreddit(subreddit)) },
    fetchSubreddit: (subreddit) => { dispatch(fetchTopics(subreddit)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
