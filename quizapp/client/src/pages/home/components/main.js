import React, { Component } from "react";
import "../scss/main.scss";
import { Link } from "react-router-dom";
export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="box bg-white">
          <button className="btn btn-danger m-2">
            <Link to="/sign" className="text-white text-decoration-none">
              Đăng ký
            </Link>
          </button>
          <button className="btn btn-primary m-2">
            <Link to="/login" className="text-white text-decoration-none">
              Đăng nhập
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
