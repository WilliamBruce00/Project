import React, { Component } from "react";
import { Outlet } from "react-router-dom";
export default class Sign extends Component {
  render() {
    return (
      <>
        <Outlet></Outlet>
      </>
    );
  }
}
