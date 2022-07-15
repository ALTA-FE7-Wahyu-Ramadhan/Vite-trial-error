import React, { Component } from "react";
import Button from "./Button";

export default class Card extends Component {
  render() {
    return (
      <div className="p-3 bg-zinc-800 rounded shadow-lg shadow-black">
        <img src={this.props.image} alt={this.props.title} />
        <p>{this.props.title}</p>
        <Button label="Add to favorite" />
      </div>
    );
  }
}