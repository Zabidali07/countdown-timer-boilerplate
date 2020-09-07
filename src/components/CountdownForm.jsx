import React from "react";

class CountdownForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  onChange(e) {
    this.setState({
      data: e.target.value,
    });
  }

  onSubmit(e) {
    //This will give you string for seconds. Do not remove refs
    e.preventDefault();
    var secondsStr = this.refs.seconds.value;
    this.props.onSetCountdownTime(secondsStr);
    this.setState({
      data: "",
    });
  }

  render() {
    return (
      <div>
        <form
          ref="form"
          onSubmit={this.onSubmit.bind(this)}
          className="countdown-form"
        >
          <input
            type="text"
            ref="seconds"
            value={this.state.data}
            placeholder="Enter time in seconds"
            onChange={this.onChange.bind(this)}
          />
          <input
            type="submit"
            className="button success expanded"
            value="Start Countdown"
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
