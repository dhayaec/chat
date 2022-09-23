import React from "react";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" name="name" id="name" placeholder="Display Name" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="file" name="file" id="file" />
        </form>
      </div>
    </div>
  );
}
