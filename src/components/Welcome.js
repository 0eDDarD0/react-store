import React from "react";

class Welcome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="AboutComponent">
                <h1>About Us</h1>
                <p style={{fontSize: '1.2rem', margin: '2rem 0'}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quae vitae odit fuga sapiente optio soluta placeat. 
                    Quibusdam sequi dolore, maiores, magni pariatur aut iure necessitatibus tempore nostrum possimus nihil?
                </p>
            </div>
        );
    }
}

export default Welcome;  