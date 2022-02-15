import React from "react";
import './Header.css';

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
                    <ul>
                        <li><Link to={"/list"}>Hombre</Link></li>
                        <li><Link to={"/list"}>Mujer</Link></li>
                        <li><Link to={"/list"}>Niños</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }


    showCategoria(type){
        console.log('hola');
    }
}

export default Header;  