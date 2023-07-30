import React, { Component } from "react";
import "../scss/sign.scss";
import { PiStudent } from "react-icons/pi/index.esm";
import { GiTeacher } from "react-icons/gi/index.esm";
import { Link } from "react-router-dom";
export default class Auth extends Component {
  render() {
    return (
      <div className="controls">
        <div className="box">
          <div className="group">
            <p className="h4">Đăng ký</p>
          </div>
          <div className="group">
            <div className="user">
              <Link to="user/1" className="text-dark">
                <p>
                  <PiStudent />
                </p>
                <p>Tôi là học sinh</p>
              </Link>
            </div>
            <div className="user">
              <Link to="user/2" className="text-dark">
                <p>
                  <GiTeacher />
                </p>
                <p>Tôi là giáo viên</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
