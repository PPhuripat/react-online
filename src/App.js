import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import DetailPage from './components/pages/DetailPage';
import ContactusPage from './components/pages/ContactUs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePage from './components/pages/category/CreatePage';
import EditPage from './components/pages/category/EditPage';
import { ToastProvider } from 'react-toast-notifications'
import AboutPage from './components/pages/AboutPage';
import IndexPage from './components/pages/category/IndexPage';
import UploadPage from './components/pages/category/UploadPage';
import HospitalPage from './components/pages/hospital/HospitalPage';
import ProductPage from './components/pages/ProductPage';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import MemberPage from './components/pages/MemberPage';
import PrivateRoute from './guard/auth';
import UserStoreProvider from "./context/UserContext";
function App() {
  return (
    <UserStoreProvider>
    <ToastProvider placement="top-center">
      <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/detail/:id/title/:title">
              <DetailPage />
            </Route>
            <Route path="/contact">
              <ContactusPage />
            </Route>
            <Route path="/hospital">
              <HospitalPage />
            </Route>
            {/* <Route path="/category">
              <IndexPage />
            </Route> */}
            <Route path="/category" render={ ({ match: {url} }) => (
              <>
                <Route path={`${url}/`} exact><IndexPage/></Route>
                <Route path={`${url}/create`}><CreatePage/></Route>
                <Route path={`${url}/edit/:id`}><EditPage/></Route>
              </>
            ) }></Route>
            <Route path="/upload">
              <UploadPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/member">
              <MemberPage />
            </PrivateRoute>
          </Switch>

        <Footer/>
    </Router>
        
    </ToastProvider>
    </UserStoreProvider>
  );
}

export default App;