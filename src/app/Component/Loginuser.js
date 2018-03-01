import axios from "axios";
export function fetchLoginUser()
{
return function(dispatch){
axios.get('http://swapi.co')
.then((response)=>{dispatch({type:"FETCH_USER_FULLFILED",payload:response.data})})
.catch((err)=>{dispatch({type:"FETCH_USER_FAILED",payload:err})})
}

}
