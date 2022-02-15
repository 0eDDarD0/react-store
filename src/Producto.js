import React from "react";
import './Producto.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

class Producto extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link to={'/detail/' + this.props.id}>
                <div id="ProductoComponent">
                    <div className="img" style={{backgroundImage: 'url('+this.props.img+')'}}></div>
                    <div className="text">
                        <p className="text-name">{this.props.name}</p>
                        <p className="text-price">{this.props.price}€</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Producto;  