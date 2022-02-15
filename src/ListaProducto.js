import React from "react";
import './ListaProducto.css';

class ListaProducto extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="ListaProductoComponent">
                {this.props.datos}
            </div>
        );
    }
}

export default ListaProducto;  