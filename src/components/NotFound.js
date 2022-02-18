import React from "react";

function NotFound(pops){
    return(
        <div className="NotFoundComponent">
            <h1 style={{
                color: 'red',
                padding: '11rem',
                fontSize: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                Lo Sentimos, la pagina no existe
            </h1>
        </div>
    );
}
  

export default NotFound;  
