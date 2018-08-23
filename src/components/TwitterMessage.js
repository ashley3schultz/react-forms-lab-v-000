import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (event) => {
    this.state({input: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange()} type="text" value={this.state.input} />
      </div>
    );
  }
}

export default TwitterMessage;
