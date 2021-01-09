import React, {Component } from "react"
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import '../App.css';
import "./Front.css"
import {Form, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom";

import {auth} from "./firebase"
import connect from "../assets/connect.jpg"

class Front extends Component {
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
         
           event.preventDefault();
          //  this.props.history.push("/home")
          auth.signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((auth) =>{
              this.props.history.push("/home")
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
    render(){
        return(
            <div className="App">
            <div className="bigdiv">
            <header >
            <div>
                <img className="img-logo" 
                alt="logo"
                src=" https://cdn.worldvectorlogo.com/logos/facebook-5.svg">
                </img> 
          
            <div className="head">
            
            <Form onSubmit = {this.handleSubmit}>
        <Form.Row className="align-items-center">
      
          <Col sm={5} className="my-1" >
            {/* <Form.Label>
              Email
            </Form.Label> */}
      
            <Form.Control 
            required
            name="email"
            type="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleInputChange}
             />
          </Col>
      
          <Col sm={5} className="my-1" >
            {/* <Form.Label>
              Password
            </Form.Label> */}
      
            <Form.Control 
            required
            name="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleInputChange}
             />
      
          </Col>
      
          
          <Col xs="2" className="my-1">
            
            <Button type="submit">Login</Button>
          </Col>
        </Form.Row>
        
      </Form>
      <Link to ="/Register">
                         <p className="link"> Don't have an Account ? Sign Up</p>
                        </Link>
      
          </div>
          
          </div>
          
          </header>          
          </div>
        
          {/* CONTENT AND CREATE ACCOUNT */}

          <div className="content clearfix">
              <div className = "content-1">
              <p className="text-p">Facebook helps you to share and conncect with your friends</p>

                <img src={connect} className="connect-img" alt="logo"/>
                   
                <div className = "content-2">
                  <h2 className="text-p">Create an Account</h2>
                    <p className="text-p">It's quick and easy!!</p>
                     <div className="account">
                     <Form onSubmit = {this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
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
              <Form.Label>Last name</Form.Label>
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
            <Form.Group as={Col} md="6" controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Male</option>
                <option>Female</option>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>

          <Button type="submit">SignUp</Button>
          <Link to ="/Login">
                         <h6 className="bottom">Already have an Account ? Log In</h6>
                        </Link>
        </Form>
                     </div>

              </div>  
              </div>

          </div>
          
          </div>
        )
    }
}
export default Front;