import React, {Component} from "react";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import '../App.css';
import {Form, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom";
// import Register from "./Register"
import {auth} from "./firebase"


class Login extends Component{
  constructor(props){
    super(props);

    this.state ={

      firstname : '',
      lastname : '',
      email : '',
      password : '',
      gender : '',
      agree : false, 

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);


  }

handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  })

}

handleSubmit(event){
    //  console.log("current state is :" + JSON.stringify(this.state))
    //  alert("current state is " + JSON.stringify(this.state))

     event.preventDefault();
    //  this.props.history.push("/home")
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((auth) =>{
        this.props.history.push("/Home")
    })
.catch((e) =>{
    if(
        e.message === "The password is invalid or the user does not have a password."
    ){
        alert("Please check your credentials again");
    } else if (
        e.message === "There is no user record correspounding to this identifier."
    ) {
        alert("Please check your credentials again");
    } else{
        alert(e.message);
    }
})
}


  render(){
    return(
      <div className="App">
      <div>
        <center>
          
          <img
            className="imglogo"
            src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"
            alt ="logo"
          />
        </center>
      </div>
      <div className="first">
        <Form onSubmit = {this.handleSubmit}>
    
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
              required
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              type="email" 
              placeholder="Email Address" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required 
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                placeholder="Set Password"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>

          <Button type="submit">Log In</Button>
          <Link to ="/Register">
                         <h6 className="bottom">Don't have an account ? Sign Up</h6>
                        </Link>
        </Form>
      </div>
    </div>
    )
  }

}
export default Login;
