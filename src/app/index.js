import React from "react";
import RactDOM from 'react-dom';


class App extends React.Component{
    render() {
        return(
            <div>Hello world</div>
        );
    }
}

RactDOM.render(<App/>, window.document.getElementById("app"));