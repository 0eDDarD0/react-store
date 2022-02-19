import Header from './components/Header.js';
import Producto from './components/Producto.js';
import Footer from './components/Footer.js';
import ListaProducto from './components/ListaProducto.js';
import Welcome from './components/Welcome.js';
import Detail from './components/Detail.js';
import Carrito from './components/Carrito.js';
import NotFound from './components/NotFound.js';
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

        if(localStorage.getItem('carrito')){
            this.state = {productos: [], carrito: JSON.parse(localStorage.getItem('carrito'))};
        }else{
            this.state = {productos: [], carrito: {}};
        }
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
                            <Route exact path="/detail/:id" element={<Detail carrito={(id)=>{this.addCarrito(id)}} productos={this.state.productos}></Detail>} />
                            <Route exact path="/carrito" element={<Carrito newCarrito={(nuevo)=>{this.newCarrito(nuevo)}} carrito={this.state.carrito}></Carrito>} />
                            <Route path="*" element={<NotFound />} />
                            {/* organizar todo en la carpeta y crear la vista del carrito *************************************************/}
                        </Routes>
                    </article>

                    <Footer></Footer>
                </Router>
            </div>
        );
    }


    ///////////////////////////////////////// METHODS
    addCarrito(id){
        let nuevo = this.state.carrito;

        //SI EL PRODUCTO YA ESTA EN EL CARRO
        if(this.state.carrito[id]){
            nuevo[id].cantidad++;
        //SI EL PRODUCTO TODAVIA NO ESTA EN EL CARRITO
        }else{
            nuevo[id] = {cantidad: 1, producto: this.state.productos[id]};
        }
        //GUARDAMOS EL ESTADO DEL CARRITO
        this.setState({carrito: nuevo});
        console.log(this.state.carrito);
        localStorage.setItem('carrito', JSON.stringify(this.state.carrito));
    }


    newCarrito(nuevo){
        this.setState({carrito: nuevo});
        localStorage.setItem('carrito', JSON.stringify(this.state.carrito));
    }
}


export default App;
