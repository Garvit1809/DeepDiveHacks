import React from "react";

function Login() {
  return (
    <div className="container">
      <form>
        {/* <div className="brand-logo"></div> */}
        <div className="brand-title">DEEP DIVE</div>
        <div className="inputs">
          <label>EMAIL</label>
          <input type="email" placeholder="example@test.com" required />
          <label>PASSWORD</label>
          <input type="password" placeholder="Min 6 charaters long" required />
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
