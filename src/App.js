import Header from './Header.js';
import Producto from './Producto.js';
import Footer from './Footer.js';
import ListaProducto from './ListaProducto.js';
import Welcome from './Welcome.js';
import Detail from './Detail.js';
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

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
            let id = 0;

            //PARA CADA PRODUCTO MAQUETAMOS UN COMPONENTE
            docs.forEach(doc => {
                let data = doc.data();
                datos.push(<Producto name={data.name} price={data.price} img={data.img} id={id}></Producto>);
                id++;
            });

            this.setState({productos: datos});
        });
    }


    ///////////////////////////////////////// HTML
    render(){
        return (
            <div className="App">
                <Router>
                    <Header></Header>

                    <article>
                            <Routes>
                                <Route exact path="/" element={<Welcome></Welcome>} />
                                <Route exact path="/list" element={<ListaProducto datos={this.state.productos}></ListaProducto>} />
                                <Route exact path="/detail/:id" element={<Detail></Detail>} />
                            </Routes>
                    </article>

                    <Footer></Footer>
                </Router>
            </div>
        );
    }


    ///////////////////////////////////////// METHODS

}


export default App;
