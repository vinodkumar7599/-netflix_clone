// import React from "react";

import "./nav.css";
import {  NavLink } from "react-router-dom";
import { MaterialUISwitch } from "../mode";


export function Nav() {
  return (
    <div>
      <div>
        {/* <CssBaseline /> */}
        <ul className="nav-ul">
          <div>
            <li>
              <img
                className="logoNav nav-li"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                width="130"
                height="50"
                alt="logo"
              />
            </li>
          </div>
          <div className="sidenav">
            <li className="nav-li">
              <NavLink className="removeunderline" to="/">Home</NavLink>
            </li>
            <li className="nav-li">
              <NavLink className="removeunderline" to="/AboutUs">About Us</NavLink>
            </li>
            <li className="nav-li">
              <NavLink className="removeunderline" to="/Movies">Movies</NavLink>
            </li>
            <li className="nav-li">
              <NavLink className="removeunderline" to="/AddMovies">Add Movies</NavLink>
            </li>
            <li className="nav-li">
              <NavLink className="removeunderline" to="/Channels">Channels</NavLink>
            </li>
          </div>
        </ul>
      </div>
      {/* <div>
           <Link to={"/login"} > <button  >Login</button> </Link>
           <Link to={"/registration"} > <button  >Registration</button> </Link>
           
        </div> */}
    </div>
  );
}
export function Channels() {
  return <h2 className="content">Channels</h2>;
}
export function NotFound() {
  return (
    <img
      src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg"
      width="100%"
      height="620px"></img>
  );
}
