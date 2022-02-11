import Header from './Header.js';
import Producto from './Producto.js';
import Footer from './Footer.js';
import React from "react";

import {fire, db} from './fire.js';
import { onSnapshot, collection } from "firebase/firestore";

import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {productos: []};
    }


    ///////////////////////////////////////// MOUNT
    componentDidMount(){
        //RECOGEMOS TODOS LOS PRODUCTOS DE FIREBASE
        onSnapshot(collection(db, "productos"), (docs) => {
            let datos = []

            //PARA CADA PRODUCTO MAQUETAMOS UN COMPONENTE
            docs.forEach(doc => {
                let data = doc.data();

                datos.push(<Producto name={data.name} price={data.price} img={data.img}></Producto>);
            });

            this.setState({productos: datos});
        });
    }


    ///////////////////////////////////////// HTML
    render(){
        return (
            <div className="App">
                <Header></Header>

                <article>
                    {this.state.productos}
                </article>

                <Footer></Footer>
            </div>
        );
    }
}


export default App;
