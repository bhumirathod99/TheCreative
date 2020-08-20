import React, {Component} from 'react';
import axios from 'axios';

class Signup extends React.Component{
   
        state = {
            fname:'',
            lname:'',
            email:'',
            password:'',
            phoneno:'',
            image:'',
            address:''
        }
 
    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    saveUser = async (e) => {
        e.preventDefault();
        const res = await axios.post("/signup", this.state);
        console.log(res);
    }
   
    render(){ 
        return(   
        
        <div className="container mt-3 mb-5">
            <div className="row p-sm-0">
            <div className="col-lg-6 col-md-6 col-10 offset-lg-3 offset-md-3 offset-1 login_style mt-5" >
            
            <div className="heading text-center mt-5">
                <h1>Signup</h1>
            </div>


            <form className="m-5" onSubmit={this.saveUser}>
            <div className="form-group">
                First Name
                <input type="text" className="form-control" name="fname" placeholder="Enter first name" 
                value={this.state.fname} onChange={this.handleInput} required />
            </div>
            <div className="form-group">
                Last Name
                <input type="text" className="form-control" name="lname" placeholder="Enter last name"  
                onChange={this.handleInput} value={this.state.lname} required/>
            </div>
            <div className="form-group">
                Email address
                <input type="email" className="form-control" name="email" placeholder="Enter email" 
                onChange={this.handleInput} value={this.state.email}  required/>
            </div>
            <div className="form-group">
                Password
                <input type="password" className="form-control" name="password" placeholder="Password" 
                onChange={this.handleInput} value={this.state.password}  required/>
            </div>
            <div className="form-group">
                Mobile Number
                <input type="text" className="form-control" name="phoneno" placeholder="phone no" 
                onChange={this.handleInput} value={this.state.phoneno} required/>
            </div>
            <div className="form-group">
                Profile Photo
                <input type="file" className="form-control" name="image" placeholder="Password" 
                onChange={this.handleInput} value={this.state.image} required/>
            </div>
            <div className="form-group">
                Address
                <textarea class="form-control" name="address" rows="3" 
                onChange={this.handleInput} value={this.state.address}  required></textarea>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn" >Submit</button>
            </div>
            </form>
            </div>
            </div>
        </div>
        
        );
    }
}
export default Signup;