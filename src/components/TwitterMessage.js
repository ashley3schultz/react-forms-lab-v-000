import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (event) => {
    this.setState({txt: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange={event => this.handleChange(event)}
        value={this.state.txt} />
        {this.maxChars - this.state.txt.length}
      </div>
    );
  }
}

export default TwitterMessage;
