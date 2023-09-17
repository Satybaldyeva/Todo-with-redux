import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form action="">
        <label htmlFor="Login">Email</label>
        <input type="email" placeholder="Your Email..." />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="Your Password..." />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
