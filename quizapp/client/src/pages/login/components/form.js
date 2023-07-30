import React, { Component } from "react";
import "../scss/form.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai/index.esm";
import { Link } from "react-router-dom";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      type: ["password", "text"],
      eye: [<AiOutlineEyeInvisible />, <AiOutlineEye />],
    };
  }
  handleButtonClick = () => {
    this.setState({
      type: this.state.type.reverse(),
      eye: this.state.eye.reverse(),
    });
  };

  render() {
    return (
      <div className="box-form">
        <form action="" method="post" id="formLogin">
          <div className="form-group">
            <label>Đăng nhập</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name=""
              placeholder="Nhập phone hoặc email"
            ></input>
          </div>
          <div className="form-group">
            <input
              type={this.state.type[0]}
              name=""
              placeholder="Mật khẩu"
            ></input>
            <button type="button" onClick={this.handleButtonClick}>
              {this.state.eye[0]}
            </button>
          </div>
          <div className="form-group">
            <label>
              <Link to="/" style={{ color: "#000" }}>
                Quên mật khẩu?
              </Link>
            </label>
          </div>
          <div className="form-group">
            <input
              type="button"
              value="Đăng nhập"
              className="btn btn-primary"
            ></input>
          </div>
          <div className="form-group">
            <label>
              Bạn chưa có tài khoản?{" "}
              <Link to="/sign">Tạo một tài khoản mới</Link>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
