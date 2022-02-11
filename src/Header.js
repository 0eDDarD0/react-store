import React from "react";
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="HeaderComponent">
                <div className="logo">
                    <h1><span>M</span>&<span>H</span></h1>
                </div>

                <nav>
                    <ul>
                        <li onClick={this.showCategoria('hombre')}>Hombre</li>
                        <li>Mujer</li>
                        <li>Niños</li>
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