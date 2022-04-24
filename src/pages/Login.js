import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api";
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };
  const loginUser = async (data) => {
    const res = await axios.post("/users/authenticate", data);
    console.log(res.data.content);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", res.data.content.token);
  };
  const { search } = useLocation();
  const to = new URLSearchParams(search).get("next");

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    try {
      await loginUser(loginData);
      navigate(to || "/allblogs");
    } catch (error) {
      setErr(error?.response?.data?.errors || error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-">
        <form>
          <h1 className="title">Login</h1>
          <p className="login-req">{!to ? "" : "Login is required"}</p>
          <p>{err}</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePass}
            placeholder="Password"
          />
          <button onClick={(e) => onSubmit(e)}>Submit</button>
          <p>
            Don't have an account? <span>Sign up</span>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
