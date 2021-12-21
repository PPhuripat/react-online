import React from "react";
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ProductPage from "./components/pages/ProductPage";
import DetailPage from "./components/pages/DetailPage";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (

    <Router>
    <Navber />
   
    <Switch>
      <Route path="/" exact>
      <HomePage></HomePage>
      </Route>
      <Route path="/about">
      <AboutPage></AboutPage>
      </Route>
      <Route path='/Product'><ProductPage/></Route>
       <Route path='/Contact'><ContactUs></ContactUs></Route>
       <Route path='/Detail'><DetailPage/></Route>
    </Switch>
    <Footer />
  
  </Router>
  );
}

export default App;
