import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (event) => {
    this.setState({
      txt: event.target.value,
      cnt: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange={event => this.handleChange(event)}
        value={this.state.txt} />
        {this.maxChars - this.state.cnt}
      </div>
    );
  }
}

export default TwitterMessage;
