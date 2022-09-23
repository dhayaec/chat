import React from "react";
import addAvatar from "../img/addAvatar.png";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama chat</span>
        <span className="title">Register</span>
        <form>
          <input
            autoComplete="off"
            type="text"
            name="name"
            id="name"
            placeholder="Display Name"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input type="file" name="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="add avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Register</button>
        </form>
        <p>You do have an account Login</p>
      </div>
    </div>
  );
}
