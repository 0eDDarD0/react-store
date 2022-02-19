import React from "react";
import './styles/Detail.css';

import { doc, getDoc } from "firebase/firestore";
import {fire, db} from '../fire.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";


function Detail(props){
    let id = useParams().id;
    //Comprueba que haya cargado los productos, si no peta
    if(!props.productos.length){
        return (
            <div className="DetailComponent"></div>
        );
    }
    //si los ha cargado continua
    let item = props.productos[id].props;

    return(
        <div className="DetailComponent">
            <div className="DetailImg" style={{backgroundImage: 'url('+item.img+')'}}></div>

            <div className="DetailContent">
                <h2>{item.name}</h2>
                <h3>{item.price}€</h3>
                <button onClick={()=>props.carrito(id)}>Añadir al carrito</button>
            </div>
        </div>
    );
}
  

export default Detail;  



// class Detail extends React.Component{

//     constructor(props){
//         super(props);

//         // const unsub = onSnapshot(doc(db, "productos", "SF"), (doc) => {
//         //     console.log("Current data: ", doc.data());
//         // });
//     }

//     render(){
//         return(
//             <div className="DetailComponent">
//                 Detalleeeeeeeeee
//             </div>
//         );
//     }
// }