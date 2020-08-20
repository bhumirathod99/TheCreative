import React, {Component} from 'react';
import axios from 'axios';

class Login extends React.Component{
    state = {
        email:'',
        password:''    
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }


    login = async (e) => {
        e.preventDefault();
        const res = await axios.post("/login", this.state)
        console.log(res);
    }
   
render(){
    return(   
        
        <div className="container mt-3">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-10 offset-lg-3 offset-md-3 offset-1 login_style mt-5" >
            <div className="heading text-center mt-5">
                <h1>Login</h1>
        
            </div>
            <form className="m-5" onSubmit={this.login}>
            <div className="form-group">
                Email address
                <input type="email" className="form-control" name="email" placeholder="Enter email"
                value={this.state.email} onChange={this.handleInput}/>
            </div>
            <div className="form-group">
                Password
                <input type="password" className="form-control" name="password" placeholder="Password"
                value={this.state.password} onChange={this.handleInput}/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn">Submit</button>
            </div>
            </form>
            </div>
            </div>
        </div>
    );
    }
}
export default Login;