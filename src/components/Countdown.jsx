import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.setTime = this.setTime.bind(this);
  }

  setTime = (time) => {
    this.setState({
      count: time,
    });
  };

  render() {
    return (
      <div>
        <Clock timeInSeconds={this.state.count} />

        <CountdownForm
          onSetCountdownTime={this.setTime}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default Countdown;
