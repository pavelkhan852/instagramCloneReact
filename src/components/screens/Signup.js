import React,{useState} from "react"
import M from 'materialize-css'
import {Link, useHistory } from "react-router-dom"
const Signup=()=>{
    const history=useHistory()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Invalid Email Address",classes:"#ff1744 red accent-3"})
            return
        }
        else{
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email
            })
        }).then(response=>response.json())
            .then(data=>{
                if(data.error){
                    M.toast({html:data.error,classes:"#ff1744 red accent-3"})
                }
                else{
                    M.toast({html:data.message,classes:"#69f0ae green accent-2"})
                    history.push('/login')
                }
            })
        }
       
    }
    return(
        <div className="auth-card">
            <div className=" card ">
                <div className="card-content ">
                <h2>Signup</h2>
                <div className="row">
                    {/* <form className="col s12"> */}
                    <div className="row">
                        <div className="input-field col s12">
                        <input placeholder="Placeholder" id="first_name" type="text" className="validate" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}/>
                        <label for="first_name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}/>
                        <label for="password">Password</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={()=>PostData()}>
                        <i className="material-icons right"></i>Signup
                    </button>
                   
                    {/* </form> */}
                </div>
                </div>
                <div className="card-action">

                </div>
            </div>
        </div>
            
    )
}

export default Signup;