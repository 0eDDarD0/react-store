let msg = "Funcion";

function Componente(props){
    return (
        <div className="Componente">
            <h3>{msg}</h3>
            <p>{props.cena}</p>
            <p>{props.almuerzo}</p>
        </div>
    );
}

export default Componente;
  