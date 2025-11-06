import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUser, setAllUser] = useState([]);

  const handleSubmit = () => {
    // e.preventDefault()
    let userData = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(userData);
    let newAllUser =[...allUser, userData]
    setAllUser(newAllUser)
    console.log(newAllUser);
    localStorage.setItem('users', JSON.stringify(newAllUser))
    
  };

  const deleteUser =()=>{
    alert('error')
  }
  return (
    <StyledWrapper>
      {/* <Nav /> */}
      <form className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              name="firstName"
              required
              placeholder="true"
              type="text"
              className="input"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              required
              placeholder="put"
              type="text"
              className="input"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input
            required
            placeholder="yuijhb"
            type="email"
            className="input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            placeholder="fdfghj"
            type="password"
            className="input"
          />
          <span>Confirm password</span>
        </label>
        <button
          className="submit"
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
        <p className="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // allows boxes to move to a new line if the screen is small
          gap: "15px", // space between boxes
        }}
      >
        {allUser.map((user, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              width: "auto", // fixed width for neat layout
              // display: "grid", // internal stacking
              gridTemplateColumns: "1fr",
              gap: "8px",
              padding: "10px",
              background: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h1>First Name:{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
            <button
              style={{
                backgroundColor: "yellow",
                color: "black",
                width: "70px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            >
              Edit
            </button>
            <button
            onClick={deleteUser}
              style={{
                backgroundColor: "red",
                color: "white",
                width: "70px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    margin-top: 50px;
    box-shadow: 10px 10px 20px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default SignUp;
