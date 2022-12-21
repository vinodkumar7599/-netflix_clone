import React from "react";
import { useState } from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
// import { Body } from "../body/bodys";
import "./Login.css";
import { Nav } from "./nav";
// import Nav from "./nav";

export function Login() {
  // var [login, setLogin] = useState([]);
  var [emailId, setemailId] = useState();
  var [loginPassword, setLoginPassword] = useState();
  // const [isLogedIn,setIsLogedIn] = useState(false);
  const history = useHistory();

  return (
    <div className="bodys">
      <div className="inputdivl">
        <input
          className="inputs"
          type={"email"}
          onChange={(event) => setemailId(event.target.value)}
          placeholder=" email"
        />
        <br />
        <input
          className="inputs"
          type={"password"}
          onChange={(event) => setLoginPassword(event.target.value)}
          placeholder=" password"
        />
        <button
          onClick={() => {
            var loginData = JSON.parse(localStorage.getItem(`${emailId}`));
            if (loginData != null) {
              if (
                emailId == loginData.email &&
                loginPassword == loginData.password
              ) {
                console.log("use login succsesfuly", loginData);
                // setIsLogedIn(true)
                history.push("/login/" + "Movies");
              } else {
                alert("Sorry wrong credential");
              }
            } else {
              alert("Sorry wrong credential");
            }

            // setLogin([...login,{'userName':emailId , 'userPassword':loginPassword}])
            // login.push({"userName":emailId , "userPassword":loginPassword})

            // console.log(loginData);
            // console.log(loginPassword);
          }}>
          save
        </button>
        <div></div>
      </div>
    </div>
  );
}

export function Registration() {
  // const [registration, setRegistration] =useState([]);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const reg = {
    name: name,
    password: password,
    email: email,
    phoneNo: phoneNo,
  };

  return (
    <div className="inputdiv">
      {/* {console.log("hi")} */}
      <input
        className="inputs"
        type={"text"}
        onChange={(event) => setName(event.target.value)}
        placeholder=" name"
      />
      <br />
      <input
        className="inputs"
        type={"password"}
        onChange={(event) => setPassword(event.target.value)}
        placeholder=" password"
      />
      <br />
      <input
        className="inputs"
        type={"email"}
        onChange={(event) => setEmail(event.target.value)}
        placeholder=" email"
      />
      <br />
      <input
        className="inputs"
        type={"number"}
        onChange={(event) => setPhoneNo(event.target.value)}
        placeholder=" phoneNo"
      />
      <br />
      <button
        onClick={() => {
          // registration.push({reg});
          // {console.log(registration)}

          localStorage.setItem(`${email}`, JSON.stringify(reg));

          const abc = JSON.parse(localStorage.getItem(`${email}`));
          console.log(abc);
        }}>
        submit{" "}
      </button>
      {/* {console.log(registration)} */}
    </div>
  );
}
//
// In order to store data in localStorage, we must first convert it to JSON string using the JSON.stringify() function. And when we want to retrieve it, we will parse the data using JSON.parse(), converting the JSON string back to a JSON object.

// {name:name , password:password ,email:email , phoneNo:phoneNo }
