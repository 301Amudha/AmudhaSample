import React from "react";
import Header from "./Header";
export default class Login extends React.Component
{
	render(){
		const maindivCss = {marginTop:"15%",
							marginLeft:"33%"
							};
		
		return(
		<div>
		<Header/>
		<div style={maindivCss}>
				<div className="col-sm-12">
					<div className="col-sm-4" style={{marginBottom:"10px"}}>
					<input type="text" placeholder="UserName" className="form-control" id="usr"/>
				</div>
				</div>
				
				<div className="col-sm-12">
				<div className="col-sm-4" style={{marginBottom:"10px"}}>
				  
				  <input type="password" placeholder="Password" className="form-control" id="pwd"/>
				</div>
				</div>
				<div className="col-sm-12" style={{marginLeft:"10%"}}>
				<button type="button" className="btn btn-primary">Login</button>
				</div>
				
		</div>
		</div>
		
		);
	}
}