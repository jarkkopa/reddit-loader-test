import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTopics } from '../actions';

import UrlInput from '../components/UrlInput';
import Subreddits from '../components/Subreddits';
import History from '../components/History';

class App extends Component {
  render() {
    const subreddits = Object.keys(this.props.subreddits)
      .sort((a, b) => this.props.subreddits[a].updated < this.props.subreddits[b].updated ? 1 : -1)
      .map((s, i) => {
        const sub = this.props.subreddits[s];
        return <Subreddits key={i}
          topics={sub.topics}
          name={s}
          loading={sub.loading} />
      });

    return (
      <div>
        <UrlInput onSubmit={this.props.fetchSubreddit} />
        <History/>
        {subreddits}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { subreddits: state.subreddits }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSubreddit: (subreddit) => { dispatch(fetchTopics(subreddit)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
