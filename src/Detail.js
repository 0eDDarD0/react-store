import React from "react";
import './Detail.css';

import { doc, onSnapshot } from "firebase/firestore";
import {fire, db} from './fire.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";


function Detail(){
    let id = useParams().id;
    console.log(id);

    //COMPROBAR PORQUE COÑO ESTO ME DEVUELVE LOS OBJETOS VACIOS
    const prod = doc(db, "productos", id);
    console.log(prod);

    return(
        <div className="DetailComponent">
            Detalleeeeeeeeee
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