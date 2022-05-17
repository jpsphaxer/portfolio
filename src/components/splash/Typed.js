import React, { Component } from "react";
import Typed from "typed.js";
import './Typed.css'

export default class SubHeading extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.

    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: ["Hello World", "Programmer", "Computer Scientist"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }
  render() {
    return (
      <div className="item2" id="myElement">
        <span className="typed"
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        ></span>
      </div>
    );
  }
}
