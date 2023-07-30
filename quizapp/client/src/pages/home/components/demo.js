import React, { Component } from "react";
import { GoTriangleRight } from "react-icons/go/index.esm";
import "../scss/demo.scss";
import video from "../../../assets/video/azota.mp4";
export default class Demo extends Component {
  render() {
    return (
      <div className="demo">
        <p className="text-center h5">
          <GoTriangleRight></GoTriangleRight>Xem Demo
        </p>
        <video src={video} controls></video>
      </div>
    );
  }
}
