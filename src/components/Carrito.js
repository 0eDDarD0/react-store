import React from "react";
import './styles/Carrito.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

class Carrito extends React.Component{
    constructor(props){
        super(props);
        let datos = this.maquetaCarrito();
        this.state = {carrito: this.props.carrito, elementos: datos.aux, total: datos.total, numero: datos.num};
    }


    ////////////////////////////////////////// HTML
    render(){
        return(
            <div id="CarritoComponent">
                <h1>Carrito</h1>
                <div className="carrito-wrapper">
                    {this.state.elementos}
                    
                    <div className="carrito-wrapper-foot">
                        <h3>Número de artículos: {this.state.numero}</h3>
                        <h3>Subtotal: {this.state.total}€</h3>
                    </div>
                </div>
            </div>
        );
    }


    ////////////////////////////////////////// METODOS
    maquetaCarrito(){
        let aux = [];
        let total = 0;
        let num = 0;

        for(let i in this.props.carrito){
            num++;
            total += this.props.carrito[i].producto.price * this.props.carrito[i].cantidad;

            aux.push(
                <div className="carrito-elemento">
                    <div className="carrito-elemento-nombre">
                        {this.props.carrito[i].producto.name}
                    </div>

                    <div className="carrito-elemento-precio">
                    Ud: {this.props.carrito[i].producto.price}€
                    </div>

                    <div className="carrito-elemento-cantidad">
                        <button onClick={()=>this.cantidadMod(0, this.props.carrito[i].producto.id)}>-</button>
                        {this.props.carrito[i].cantidad}
                        <button onClick={()=>this.cantidadMod(1, this.props.carrito[i].producto.id)}>+</button>
                    </div>

                    <div className="carrito-elemento-total">
                        Total: {this.props.carrito[i].producto.price * this.props.carrito[i].cantidad}€
                    </div>
                </div>
            );
        }    
        
        if(!aux.length){
            aux.push(
                <div style={{textAlign: 'center', margin: '6rem'}}>
                    <h2>Parece que no hay nada por aquí...</h2>
                </div>
            )
        }

        return {aux: aux, total: total, num: num};
    }


    //METODO QUE ALTERA LA CANTIDAD DE UN MISMO ELEMENTO
    cantidadMod(option, id){
        let mod = this.state.carrito;

        //COMPROBAMOS SI ESTAMOS SUMANDO O RESTANDO
        if(option){
            mod[id].cantidad++;
        }else{
            //COMPROBAMOS SI QUEDA SOLO UNA UNIDAD DE PRODUCTO O MAS PARA DISMINUIR O BORRAR
            if(mod[id].cantidad <= 1){
                delete mod[id];
            }else{
                mod[id].cantidad--;
            }
        }

        this.setState({carrito: mod});
        let datos = this.maquetaCarrito();
        this.setState({elementos: datos.aux, total: datos.total, numero: datos.num});

        this.props.newCarrito(this.state.carrito);
    }
}

export default Carrito;  