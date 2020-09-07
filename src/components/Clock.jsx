import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInSeconds: "",
      intervalId: function () {},
    };
    this.formatTime = this.formatTime.bind(this);
    this.timer = this.timer.bind(this);
  }

  intervalID = 0;

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.timeInSeconds !== this.props.timeInSeconds) {
      this.setState({
        ...this.state,
        timeInSeconds: this.props.timeInSeconds,
      });
      this.intervalID = setInterval(this.timer, 1000);
    }
  }

  // componentDidMount() {
  //   // this.setState({ ...this.state, intervalId: intervalId });
  // }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return (
      <div className="flex-container">
        <div>{minutes} </div> :<div>{seconds}</div>{" "}
      </div>
    ); // minutes + ":" + seconds;
  }

  timer() {
    this.setState({
      ...this.state,
      timeInSeconds: this.state.timeInSeconds - 1,
    });

    if (this.state.timeInSeconds < 1) {
      clearInterval(this.intervalID);
    }
  }

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }
  render() {
    //Keep the classes name. Try to inject your code and do not remove existing code

    return (
      <div className="clock">
        <span className="clock-text"></span>

        <div></div>
        <div>{this.formatTime(this.state.timeInSeconds)}</div>
      </div>
    );
  }
}

export default Clock;
