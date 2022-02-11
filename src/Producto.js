import React from "react";
import './Producto.css';

class Producto extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="ProductoComponent">
                <div className="img" style={{backgroundImage: 'url('+this.props.img+')'}}></div>
                <div className="text">
                    <p className="text-name">{this.props.name}</p>
                    <p className="text-price">{this.props.price}€</p>
                </div>
            </div>
        );
    }
}

export default Producto;  