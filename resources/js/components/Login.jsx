import React from 'react';
const Login = () =>{
    return(   
        <> 
        
        <div className="container mt-3">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-10 offset-lg-3 offset-md-3 offset-1 login_style mt-5" >
            <div class="heading text-center mt-5">
                <h1>Login</h1>
            </div>
            <form className="m-5">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn">Submit</button>
            </div>
            </form>
            </div>
            </div>
        </div>
        </>
    );
}
export default Login;