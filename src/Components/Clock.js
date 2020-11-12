import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, Modalfooter } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getTime(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ date: Date.now() }),
      1000
    );
  }

  timeStampToString = (ts) => {
    const date = new Date();
    return (
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      " " +
      (date.getHours() < 10 ? "0" : "") +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes() +
      ":" +
      (date.getSeconds() < 10 ? "0" : "") +
      date.getSeconds()
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  convertSecondsToDate = (ts) => {
    const secondsLeft = ts - Math.round(this.state.date / 1000);
    return secondsLeft;
  };

  render() {
    return (
      <div>
        {" "}
        <h1>Today is {Math.round(this.state.date / 1000)} in seconds</h1>
        <h1>Today is {this.timeStampToString(this.state.date)}</h1>
        <Modal>
          <ModalHeader></ModalHeader>
        </Modal>
      </div>
    );
  }
}
export default Clock;
