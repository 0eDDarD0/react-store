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
                    <h1><span>M</span>&<span>H</span></h1>
                </div>
                </Link>

                <nav>
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/list"}>Productos</Link>
                    <Link to={"/carrito"}>Carrito</Link>
                </nav>

            </div>
        );
    }


    showCategoria(type){
        console.log('hola');
    }
}

export default Header;  