import React from "react";

function Register() {
  return (
    <div className="container">
      <form>
        {/* <div className="brand-logo"></div> */}
        <div className="brand-title">DEEP DIVE</div>
        <div className="inputs">
          <label>NAME</label>
          <input type="name" placeholder="John" required />
          <label>EMAIL</label>
          <input type="email" placeholder="example@test.com" required />
          <label>PASSWORD</label>
          <input type="password" placeholder="Min 6 charaters long" required />
          <button type="submit" style={{ backgroundColor: "lightBlue" }}>
            REGISTER
          </button>
        </div>
      </form>

      <button>LOGIN</button>
    </div>
  );
}

export default Register;
