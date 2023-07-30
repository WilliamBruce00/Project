import "./scss/App.scss";
import Home from "./view/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/login";
import Form from "./pages/signup/components/form";
import Header from "./pages/home/components/header";
import { useState } from "react";
import Sign from "./view/sign";
import Auth from "./pages/signup/components/auth";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const handclick = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(localStorage.setItem("theme", "light"));
    }
  };
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  return (
    <div className="Container" id={theme}>
      <Header alert={handclick} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign></Sign>}>
            <Route path="" element={<Auth></Auth>}></Route>
            <Route path="user/:id" element={<Form></Form>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
