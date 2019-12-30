import React, { Component } from "react";
import ContactUs from "./Home/ContactUs";
import AboutUs from "./Home/AboutUs";
import Projects from "./Home/Projects";
import Marble from "./Home/Marble";
import Home from "./Home/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch,NavLink} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import axios from 'axios'




export default class App extends Component {
  state={
    marble:[],
    img:[],
  }
 
  ;
  componentDidMount(){
    axios.get('http://localhost:5000/add/rocks',{
     }).then(res =>{
       console.log(res)

        this.setState({ marble: res.data });
      })
    }

   clicked = () =>{ 
    console.log('e');
    
  }
  render() {
    return (

        <BrowserRouter>
       <Navbar collapseOnSelect expand="lg" id="nav" variant="dark">
  <Navbar.Brand href="#home">DGH</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavLink className="nav-link" to="/" >Home</NavLink>
              <NavLink className="nav-link" to="/AboutUs" >About Us</NavLink>
              <NavLink className="nav-link" to="/ContactUs" >Contact Us</NavLink>

            
    </Nav>
    <Nav>
    <NavLink className="nav-link "  to="/Marbles" >Marbles</NavLink>
  <NavLink className="nav-link" to="/Projects" >Projects</NavLink>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
          <Switch>
            <Route path="/AboutUs" render={ ()=> <AboutUs />} />
            <Route path="/ContactUs" render={ ()=>  <ContactUs /> } />
            <Route path="/Projects" render={ ()=> <Projects/>} />
            <Route path="/Marbles" render={ ()=> <Marble marbles={this.state.marble}/>} />
            <Route path="/" render={ ()=> <Home/>} />

          </Switch>
        </BrowserRouter>
    )
  }
}