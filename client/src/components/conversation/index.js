import React from "react";
// import { Message } from "../message";
import "./style.scss";

export class Conversation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.messages.map((message, index) => {
      return <p key={index}>{message.question}</p>;
    });
  }
}