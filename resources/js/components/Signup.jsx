import React, {Component} from 'react';
class Signup extends Component{
    constructor()
    {
        super();
        this.state={
            fname:'',
            lname:'',
        }
    }
    submit()
    {
        console.log(this.state)
    }
    render() {
        return(   
        <> 
        
        <div className="container mt-3 mb-5">
            <div className="row p-sm-0">
            <div className="col-lg-6 col-md-6 col-10 offset-lg-3 offset-md-3 offset-1 login_style mt-5" >
            <div className="heading text-center mt-5">
                <h1>Signup</h1>
            </div>
            <form className="m-5" method="post" action="#">
            <div className="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name" onChange={(item)=>setState({fname:item.target.value})}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name" onChange={(item)=>setState({fname:item.target.value})}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Mobile Number</label>
                <input type="text" className="form-control" name="phoneno" placeholder="phone no"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Profile Photo</label>
                <input type="file" className="form-control" name="image" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Address</label>
                <textarea class="form-control" name="address" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn" onClick={()=>{this.submit()}} >Submit</button>
            </div>
            </form>
            </div>
            </div>
        </div>
        </>
        );
    }
}
export default Signup;