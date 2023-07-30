import React, { Component } from "react";
import "../scss/sign.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai/index.esm";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ["password", "text"],
      eye: [<AiOutlineEyeInvisible />, <AiOutlineEye />],
      username: "",
      email: "",
      password: "",
      eUser: "",
      eMail: "",
      ePass: "",
      conditon: true,
      mailformat: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    };
  }
  handleShowPass = async () => {
    await this.setState({
      type: this.state.type.reverse(),
      eye: this.state.eye.reverse(),
    });
  };
  handleCheck = () => {
    return new Promise((resolve, reject) => {
      const a = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
      resolve(a);
    })
      .then((u) => {
        let err = {
          eU: "",
          eM: "",
          eP: "",
        };
        const { username, email, password } = u;
        username === ""
          ? (err.eU = "Vui lòng điền vào ô trống này")
          : username.length < 5
          ? (err.eU = "Tên đăng nhập phải từ 5 ký tự trở lên")
          : (err.eU = "");
        password === ""
          ? (err.eP = "Vui lòng điền vào ô trống này")
          : password.length < 5
          ? (err.eP = "Mật khẩu phải từ 5 ký tự trở lên")
          : (err.eP = "");
        email === ""
          ? (err.eM = "Vui lòng điền vào ô trống này")
          : !email.match(this.state.mailformat)
          ? (err.eM = "Định dạng email không hợp lệ")
          : (err.eM = "");
        return err;
      })
      .then((n) => {
        this.setState({
          eUser: n.eU,
          eMail: n.eM,
          ePass: n.eP,
        });
        return n;
      })
      .then((m) => {
        if (m.eM === "" && m.eP === "" && m.eU === "") {
          axios
            .post("http://localhost:27017/api/user", {
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
            })
            .then((res) => {
              console.log(res.data);
              window.location.href = "/";
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  render() {
    return (
      <div className="box-sign">
        <form
          action="/"
          method="post"
          id="formSign"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <p className="h4">Đăng ký</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Họ tên"
              name="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          {this.state.eUser !== "" ? <p>{this.state.eUser}</p> : <p></p>}

          <div className="form-group">
            <input
              type="text"
              placeholder="Nhập phone hoặc email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          {this.state.eMail !== "" ? <p>{this.state.eMail}</p> : <p></p>}

          <div className="form-group">
            <input
              type={this.state.type[0]}
              placeholder="Mật khẩu"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button type="button" onClick={this.handleShowPass}>
              {this.state.eye[0]}
            </button>
          </div>
          {this.state.ePass !== "" ? <p>{this.state.ePass}</p> : <p></p>}
          <div className="form-group">
            <p style={{ textAlign: "left" }}>
              Bằng cách ấn vào nút "Đăng ký", tôi đồng ý với
              <span style={{ color: "blue", margin: "0px 5px" }}>
                Điều khoản Sử dụng
              </span>
              và
              <span style={{ color: "blue", margin: "0px 5px" }}>
                Chính Sách Bảo Mật của AZOTA
              </span>
            </p>
          </div>
          <div className="form-group">
            <input
              type="button"
              value="Đăng ký"
              className="btn btn-primary"
              onClick={this.handleCheck}
            />
          </div>
          <div className="form-group">
            <p>
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
