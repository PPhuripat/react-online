import React from "react";
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (

    <Router>
    <NavBar />
    <HomePage />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </Switch>
    <Footer />
  
  </Router>
  );
}

export default App;
