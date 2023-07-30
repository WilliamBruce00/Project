import React, { Component } from "react";
import "../scss/header.scss";
import image from "../../../assets/image/logo.svg";
import { BsMoonStars } from "react-icons/bs/index.esm";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <img src={image} alt="logo" />
          </a>
        </div>
        <div className="header-theme" onClick={() => this.props.alert()}>
          <span>
            <BsMoonStars />
          </span>
          <span>Chế độ tối</span>
        </div>
      </div>
    );
  }
}
