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
export default class App extends Component {
  // state = {
  //   data: [],
  //   res: false,
  // }
  // componentDidMount() {
  //   axios.get('https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=6f7eefdd323cdde5a27343c99c3ace47636d3d8677f6716c296bf7d7e54c9171')
    
  //     .then(res => {
  //       console.log(res);

  //       this.setState({ data: res.data, res: true})
  //     })
  // }
  render() {
    return (

        <BrowserRouter>
        
          <Navbar  bg="danger" fixed="top" variant="dark" style={{ opacity: '0.5' }}>
          <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook--icon-png-image_3570308.jpg"
        width="90"
        height="30"
        className="d-inline-block align-top"
      />
      {''}
    </Navbar.Brand>

            <Nav >
            <NavLink className="nav-link" to="/Home" >Home</NavLink>
              <NavLink className="nav-link" to="/AboutUs" >About Us</NavLink>
              <NavLink className="nav-link" to="/ContactUs" >Contact Us</NavLink>
              <NavLink className="nav-link" to="/Projects" >Projects</NavLink>
              <NavLink className="nav-link" to="/Marble" >marble</NavLink>

            </Nav>
          </Navbar>
          <Nav >
          </Nav>
          <Switch>
            <Route path="/Home" render={ ()=> <Home/>} />
            <Route path="/AboutUs" render={ ()=> <AboutUs />} />
            <Route path="/ContactUs" render={ ()=>  <ContactUs /> } />
            <Route path="/Projects" render={ ()=> <Projects/>} />
            <Route path="/Marble" render={ ()=> <Marble/>} />

          </Switch>
        </BrowserRouter>
    )
  }
}