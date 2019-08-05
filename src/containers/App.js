import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import UrlInput from '../components/UrlInput';
import Subreddits from '../components/Subreddits';
import History from '../components/History';
import { fetchTopics, deleteSubreddit } from '../actions';

class App extends Component {
  urlSubmitHandler = subreddit => {
    if (!subreddit) {
      return;
    }
    this.props.dispatch(fetchTopics(subreddit));
  }

  deleteClickHandler = subreddit => {
    this.props.dispatch(deleteSubreddit(subreddit));
  }

  render() {
    const subreddits = Object.keys(this.props.subreddits)
      .map((s, i) => <Subreddits key={i} topics={this.props.subreddits[s].topics} name={s} onDeleteClick={() => this.deleteClickHandler(s)} />);

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

export default connect(mapStateToProps)(App);
