import React from "react";
import RactDOM from 'react-dom';
import Login from './Component/Login';


class App extends React.Component{
    render() {
        return(
            <div><Login/></div>
        );
    }
}

RactDOM.render(<App/>, window.document.getElementById("app"));