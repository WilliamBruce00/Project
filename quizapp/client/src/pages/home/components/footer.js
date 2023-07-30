import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa/index.esm";
import { AiFillYoutube } from "react-icons/ai/index.esm";
import "../scss/footer.scss";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="left">
          <Link to="/"> Chính sách bảo mật</Link>
          <Link to="/">Hướng dẫn</Link>
          <p>Công ty TNHH Công nghệ Giáo dục Azota</p>
          <p>
            Địa chỉ: Tầng 3, số 5 Ngõ 78 Duy Tân, Dịch vọng Hậu, Cầu Giấy, Hà
            Nội
          </p>
          <p>MST: 0109742634</p>
        </div>
        <div className="right">
          <span>Kết nối</span>
          <span>
            <FaFacebookF></FaFacebookF>
          </span>
          <span>
            <AiFillYoutube></AiFillYoutube>
          </span>
        </div>
      </div>
    );
  }
}
