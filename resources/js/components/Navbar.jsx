import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
    <div className="container-fluid nav_bg main_navbar">
        <div className="row">
          <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">The Creative</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/home_work">How it's Work</NavLink>
                    </li>
                   
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/homeskill">Freelancer Skill</NavLink>
                    </li>
                     <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                     <li className="nav-item">
                      <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
}
export default Navbar;