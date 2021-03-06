import React, {Component } from "react"
// Add the Firebase services that you want to use
import firebase from 'firebase/app';


import "firebase/auth";
import "firebase/firestore";
import '../App.css';
import "./Front.css"
import {Form, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom";

import connect from "../assets/connect.jpg"

class SecondDiv extends Component {
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
              firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                  .then((user) => {
                      // Signed in 
                      this.props.history.push("/Home")
      // ...
      })
      .catch((e) =>{
          if(
              e.message === "The password is invalid or the user does not have a password."
          ){
              alert("Please check your credentials again");
          } else if (
              e.message === "There is no user record correspounding to this identifier. The user may have been deleted"
          ) {
              alert("Please check your credentials again");
          } else{
              alert(e.message);
          }
      })
}
      
    render() {
      return (
          <div className="App">
              <div className="content clearfix">
              <div className = "content-1">
                <p className="text-p">Facebook helps you to share and conncect with your friends</p>

                <img src={connect} className="connect-img" alt="logo"/>
               </div>
                   
               <div className = "content-2">
                 <h2 className="text-p">Create an Account</h2>
                   <p className="text-p">It's quick and easy!!</p>
                    <div className="account">
                        <Form onSubmit = {this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                           <label className="label">First Name</label>
                            <Form.Control 
                            required 
                            type="text" 
                            // id="firstname"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                            placeholder="First name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <label className="label">Last name</label>
                            <Form.Control 
                                required 
                                type="text" 
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.handleInputChange}
                                placeholder="Last name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <label className="label">Email Address</label>
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
                            <label className="label">Password</label>
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
                            <Form.Group as={Col} md="6" controlId="formGridState">
                            <label className="label">Gender</label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Male</option>
                                <option>Female</option>
                                <Form.Control.Feedback type="invalid">
                                
                                </Form.Control.Feedback>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                        
                        <input type="checkbox" required feedback="You must agree before submitting." /> 
                        <label className="agree">Agree to terms and conditions </label>
  

                            
                            
                        </Form.Group>

                        <Button type="submit">SignUp</Button>
                        <Link to ="/Login">
                                        <h6 className="bottom">Already have an Account ? Log In</h6>
                                        </Link>
                            </Form>
                     </div> 
                     {/* //Account div ends */}

              </div> 
                  {/* //Content-2 div ends here   */}

              </div>
              </div>  
      );
    }
}
  
export default SecondDiv;
