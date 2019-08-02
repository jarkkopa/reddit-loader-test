import React, { Component } from 'react';

class UrlInput extends Component {
    state = {
        input: 'programming'
    }

    inputChangeHandler = (event) => {
        this.setState({ input: event.target.value });
    }

    buttonClickHandler = () => {
        this.props.onSubmit(this.state.input);
    }

    render() {
        return (
            <div>
                <p>Subreddit loader</p>
                <input type="text" value={this.state.input} onChange={this.inputChangeHandler}></input>
                <button onClick={this.buttonClickHandler}>Send</button>
            </div>
        );
    }
};

export default UrlInput;