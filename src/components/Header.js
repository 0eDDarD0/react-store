import React from "react";
import './styles/Header.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="HeaderComponent">
                <Link id="logo" to={"/"}>
                <div className="logo">
                    <img src="../../logo.png" alt="" />
                </div>
                </Link>

                <nav>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/"}>Productos</Link>
                    <Link to={"/carrito"}>Carrito</Link>
                </nav>

            </div>
        );
    }
}

export default Header;  