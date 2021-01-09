import React, {Component} from "react";
import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import '../App.css';
import {Form, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom";
// import Login from "./Login"

// import home from "./Home"
// import {auth, db} from "./firebase"


class Register extends Component{
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


  render(){
    return(
      <div className="App">
      <div className="register-heading">
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
    )
  }

}
export default Register;



// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   );
  
//   const formValid = ({ formErrors, ...rest }) => {
//     let valid = true;
  
//     // validate form errors being empty
//     Object.values(formErrors).forEach(val => {
//       val.length > 0 && (valid = false);
//     });
  
//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//       val === null && (valid = false);
//     });
  
//     return valid;
//   };




// class form extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         firstName: null,
//         lastName: null,
//         email: "",
//         password: "",
//         formErrors: {
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: ""
//         }
//       };
//     }
  
//     // handleSubmit = e => {
//     //   e.preventDefault();
      
     
//     // };
//     handleSubmit = event =>{
//         //  console.log("current state is :" + JSON.stringify(this.state))
//         //  alert("current state is " + JSON.stringify(this.state))
    
//          event.preventDefault();
//         //  this.props.history.push("/home")
//             firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//                 .then((user) => {
//                     // Signed in 
//                     this.props.history.push("/home")
//     // ...
//     })
//     .catch((e) =>{
//             if(
//                 e.message === "The password is invalid or the user does not have a password."
//             ){
//                 alert("Please check your credentials again");
//             } else if (
//                 e.message === "There is no user record correspounding to this identifier. The user may have been deleted"
//             ) {
//                 alert("Please check your credentials again");
//             } else{
//                 alert(e.message);
//             }
//         })
// }
  
//     handleChange = e => {
//       e.preventDefault();
//       const { name, value } = e.target;
//       let formErrors = { ...this.state.formErrors };
  
//       switch (name) {
//         case "firstName":
//           formErrors.firstName =
//             value.length < 3 ? "minimum 3 characaters required" : "";
//           break;
//         case "lastName":
//           formErrors.lastName =
//             value.length < 3 ? "minimum 3 characaters required" : "";
//           break;
//         case "email":
//           formErrors.email = emailRegex.test(value)
//             ? ""
//             : "invalid email address";
//           break;
//         case "password":
//           formErrors.password =
//             value.length < 6 ? "minimum 6 characaters required" : "";
//           break;
//         default:
//           break;
//       }
  
//       this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//     };
  
//     render() {
//       const { formErrors } = this.state;
  
//       return (
//         <div className="wrapper">
//           <div className="form-wrapper">
//             <h1>Create Account</h1>
//             <form onSubmit={this.handleSubmit} formValid>
//               <div className="firstName">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   className={formErrors.firstName.length > 0 ? "error" : null}
//                   placeholder="First Name"
//                   type="text"
//                   name="firstName"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//                 {formErrors.firstName.length > 0 && (
//                   <span className="errorMessage">{formErrors.firstName}</span>
//                 )}
//               </div>
//               <div className="lastName">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   className={formErrors.lastName.length > 0 ? "error" : null}
//                   placeholder="Last Name"
//                   type="text"
//                   name="lastName"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//                 {formErrors.lastName.length > 0 && (
//                   <span className="errorMessage">{formErrors.lastName}</span>
//                 )}
//               </div>
//               <div className="email">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   className={formErrors.email.length > 0 ? "error" : null}
//                   placeholder="Email"
//                   type="email"
//                   name="email"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//                 {formErrors.email.length > 0 && (
//                   <span className="errorMessage">{formErrors.email}</span>
//                 )}
//               </div>
//               <div className="password">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   className={formErrors.password.length > 0 ? "error" : null}
//                   placeholder="Password"
//                   type="password"
//                   name="password"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//                 {formErrors.password.length > 0 && (
//                   <span className="errorMessage">{formErrors.password}</span>
//                 )}
//               </div>
//               <div className="createAccount">
//                 <button type="submit">Create Account</button>
//                 <small>Already Have an Account?</small>
//               </div>
//             </form>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default form;


//SECOND

//THIRD
// class Test extends React.Component {
//     constructor(props){
//       super(props);
  
//       this.state = {
//         fields: {},
//         errors: {}
//       }
//     }
  
//     handleValidation(){
//       let fields = this.state.fields;
//       let errors = {};
//       let formIsValid = true;
  
//       //FirstName
//       if(!fields["firstname"]){
//         formIsValid = false;
//         errors["firstname"] = "Cannot be empty";
//       }
  
//       if(typeof fields["firstname"] !== "undefined"){
//         if(!fields["firstname"].match(/^[a-zA-Z]+$/)){
//           formIsValid = false;
//           errors["firstname"] = "Only letters";
//         }      	
//       }
//       //LastName 
//       if(!fields["lastname"]){
//         formIsValid = false;
//         errors["lastname"] = "Cannot be empty";
//       }
  
//       if(typeof fields["lastname"] !== "undefined"){
//         if(!fields["lastname"].match(/^[a-zA-Z]+$/)){
//           formIsValid = false;
//           errors["lastname"] = "Only letters";
//         }      	
//       }
  
//       //Email
//       if(!fields["email"]){
//         formIsValid = false;
//         errors["email"] = "Cannot be empty";
//       }
  
//       if(typeof fields["email"] !== "undefined"){
//         let lastAtPos = fields["email"].lastIndexOf('@');
//         let lastDotPos = fields["email"].lastIndexOf('.');
  
//         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
//           formIsValid = false;
//           errors["email"] = "Email is not valid";
//         }
//       }
  
  
  
//       this.setState({errors: errors});
//       return formIsValid;
//     }
  
//     contactSubmit(e){
//       e.preventDefault();
//       if(this.handleValidation()){
//         alert("Form submitted");
//       }else{
//         alert("Please Fill all the fileds.")
//       }
  
//     }
  
//     handleChange(field, e){    		
//       let fields = this.state.fields;
//       fields[field] = e.target.value;        
//       this.setState({fields});
//     }
  
//     render(){
//       return (
//         <div>        	
//           <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
           
//             <input ref="firstname" type="text" size="30" placeholder="First Name" onChange={this.handleChange.bind(this, "firstname")} value={this.state.fields["firstname"]}/>
//                 <span className="error">{this.state.errors["firstname"]}</span>
//                 <br/>
//             <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>

//           </form>
//         </div>
//       )
//     }
//   }
//   export default Test;
