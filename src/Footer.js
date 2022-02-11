import React from "react";
import './Footer.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="FooterComponent">
                <div className="footer-links">
                    <ul>
                        <li>About</li>
                        <li>Trabaja con nosotros</li>
                        <li>Contact</li>
                        <li>Encuentranos</li>
                    </ul>
                </div>

                <div className="logo">
                    <h1><span>M</span>&<span>H</span></h1>
                </div>
            </div>
        );
    }
}

export default Footer;  