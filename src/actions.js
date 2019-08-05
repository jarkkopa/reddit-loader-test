/*

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

*/

const baseUrl = 'https://www.reddit.com';

const fetchTopics = (subreddit) => (dispatch) => {
    dispatch({ type: actionTypes.fecthSubreddit, subreddit: subreddit });

    fetch(`${baseUrl}/r/${subreddit}.json`)
        .then(result => result.json())
        .then(jsonResult => {
            dispatch({
                type: actionTypes.receiveSubreddit,
                subreddit: subreddit,
                topics: jsonResult.data.children.map(c => {
                    const topic = c.data;
                    return {
                        title: topic.title,
                        author: topic.author,
                        url: `${baseUrl}/r/${topic.permalink}`
                    };
                })
            })
        })
        .catch(e => {
            console.log('Error', e);
            // TODO: dispatch error action
        });
}

const deleteSubreddit = (subreddit) => {
    return {
        type: actionTypes.deleteSubreddit,
        subreddit: subreddit
    };
};

export { fetchTopics, deleteSubreddit }

export const actionTypes = {
    fecthSubreddit: 'FETCH_SUBREDDIT',
    deleteSubreddit: 'DELETE_SUBREDDIT',
    receiveSubreddit: 'RECEIVE_SUBREDDIT'
};