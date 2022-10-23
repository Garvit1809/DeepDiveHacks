import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Section = styled.div`
 background-image: url("https://media.istockphoto.com/photos/colorful-coral-reef-with-many-fishes-picture-id508960998?b=1&k=20&m=508960998&s=170667a&w=0&h=rgX09SkfLgZf8JrHYCHRwll6zLUhKI0HiZz1bMsLc0E=");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;

  .container {
  position: relative;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}

.brand-logo {
  height: 1px;
  width: 1px;
  background: url("");
  margin: 0;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
}

.brand-title {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #1da1f2;
  letter-spacing: 1px;
}

.inputs {
  text-align: left;
  margin-top: 30px;
}

label,
input,
button {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

label {
  margin-bottom: 4px;
}

label:nth-of-type(2) {
  margin-top: 12px;
}

input::placeholder {
  color: gray;
}

input {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}

button {
  color: white;
  margin-top: 20px;
  background: #1da1f2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
}

button:hover {
  box-shadow: none;
}

a {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
}

input {
  /* caret-color: red; */
}
`

function Register() {
const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <Section>
    <div className="container"> 
      <form onSubmit={() => handleSubmit()} >
        {/* <div className="brand-logo"></div> */}
        <div className="brand-title">ScOObaDive</div>
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

      <button type="submit">LOGIN</button>
    </div>
    </Section>
  );
}

export default Register;
