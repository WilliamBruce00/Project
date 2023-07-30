import React, { Component } from "react";
import Main from "../pages/home/components/main";
import Demo from "../pages/home/components/demo";
import Footer from "../pages/home/components/footer";
export default class Home extends Component {
  render() {
    return (
      <>
        <Main></Main>
        <Demo></Demo>
        <Footer></Footer>
      </>
    );
  }
}
