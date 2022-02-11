import React from "react";

class Clase extends React.Component{
    msg = "Clase"

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="ClaseComponent">
                <h3>{this.msg}</h3>
                <p>{this.props.almuerzo}</p>
                <p>{this.props.cena}</p>
                <button onClick={this.pulsame}>pulsame Clase</button>
            </div>
        );
    }

    pulsame(){
        console.log("holap2");
    }
}

export default Clase;