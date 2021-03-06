import React, { Component } from "react";

export default class Button extends Component {
    render() {
      return (
        <button className="text-white text-lg bg-neutral-500 dark:bg-zinc-800 rounded-md p-2">
          {this.props.label}
        </button>
      );
    }
  }