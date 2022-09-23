import React from "react";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama chat</span>
        <span className="title">Login</span>
        <form>
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
          <button>Login</button>
        </form>
        <p>You don't have an account Register</p>
      </div>
    </div>
  );
}
