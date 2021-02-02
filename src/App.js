import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Pages/home";
import Nav from "./Feature/nav"
import About from "./Pages/about"
import Services from "./Pages/services"
import Projects from "./Pages/projects"
import Contact from "./Pages/contacts"

const App=()=>{
  return(
   
    <React.Fragment>
      <Nav/>
      <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/services" component={Services} exact/>
            <Route path="/projects" component={Projects} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Redirect to="/home" from='/' component={Home} exact />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App;