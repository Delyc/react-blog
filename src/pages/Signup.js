import axios from "axios";
import axiosBase from "../api";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";


export default function Signup() {
  const navigate = useNavigate();
  const [foreName, setForeName] = useState("");
  const onChangeForeName = (e) => {
    setForeName(e.target.value);
  };
  const [surname, setSurname] = useState("");
  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };
  const [sex, setSex] = useState("");
  const onChangeSex = (e) => {
    setSex(e.target.value);
  };
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const createUser = async (data) => {
    try {
      const res = axiosBase.post("/users", data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    setForeName("");
    setSurname("");
    setSex("");
    setEmail("");
    setPassword("");
    e.preventDefault();
    const regData = {
      foreName: foreName,
      email: email,
      password: password,
      sex: sex,
      surname: surname,
    };
    createUser(regData);
    console.log(regData)
    navigate('/login')

  };
  return (
    <>
    <Navbar />
    <div className="login-">
      <form>
      <h1 className="title">Signup</h1>
      <input
        type="text"
        value={foreName}
        onChange={onChangeForeName}
        name="forename"
        placeholder="Forename"
      />
      <input
        type="text"
        value={surname}
        onChange={onChangeSurname}
        name="surname"
        placeholder="Surname"
      />
      <input
        type="email"
        value={email}
        onChange={onChangeEmail}
        name="email"
        placeholder="Email"
      />
      <input
        type="text"
        value={sex}
        onChange={onChangeSex}
        name="sex"
        placeholder="Sex"
      />
      <input
        type="password"
        value={password}
        onChange={onChangePassword}
        name="password"
        placeholder="Password"
      />
      <button onClick={(e) => onSubmit(e)} type="submit">
        Submit
      </button>
      <p>Already have an account? <span>Login</span> </p>
    </form>

    </div>
    <Footer />
    </>
    
    
  );
}
