import React from "react";
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ProductPage from "./components/pages/ProductPage";
import DetailPage from "./components/pages/DetailPage";
import ContactUs from "./components/pages/ContactUs";
import HospitalPage from "./components/pages/hospital/HospitalPage";
import IndexPage from "./components/pages/category/IndexPage";
import CreatePage from "./components/pages/category/CreatePage";
import EditPage from "./components/pages/category/EditPage";

function App() {
  return (

    <Router>
    <Navber />
   
    <Switch>
    <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/hospitalPage">
            <HospitalPage />
          </Route>
          {/* <Route path='/category'><IndexPage/></Route> */}
          <Route path="/category"
            render={({ match: { url } }) => (
              <>
              <Route path={`${url}/`} exact><IndexPage /></Route>
              <Route path={`${url}/create`}><CreatePage/></Route>
              <Route path={`${url}/edit/:id`}><EditPage/></Route>
              </>

            )}>
          </Route>
    </Switch>
    <Footer />
  
  </Router>
  );
}

export default App;
