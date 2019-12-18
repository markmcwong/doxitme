import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './page/index';
import AllListingGrid from './page/all-listing-grid';
import AllListingList from './page/all-listing-list';
import ListingDetails from './page/listing-details';
import Category from './page/all-categoris';
import Location from './page/all-location';
import Pricing from './page/pricing-plan';
import Faq from './page/faq';
import About from './page/about';
import Contact from './page/contact';
import Cards from './page/cards';
import HeaderStyle from './page/header-style';
import BlogRightSide from './page/blog-right-side';
import BlogGrid from './page/blog-grid';
import BlogDetails from './page/blog-details';
import AuthProfile from './page/auth-profile';
import AuthDeshbord from './page/auth-deshbord';
import CheckoutBasic from './page/checkout-basic';
import CheckoutAdvanced from './page/advanced';
import Enterprise from './page/enterprise';
import Invoice from './page/invoice';
import AddListing from './page/add-listing';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import {fetchBlog} from "../Store/action/fetchBlog";
import {checkCurrentUser} from "../Store/action/checkCurrentUserAction";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function onAppInit(dispatch) {
  dispatch(fetchBlog())
  dispatch(checkCurrentUser())
/*  onEnter={onAppInit(props.store.dispatch)}*/
}

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path = '/' component = { Index } />
          <Route path = '/all-listings-grid' component = { AllListingGrid } />
          <Route path = '/all-listings-list' component = { AllListingList } />
          <Route path = '/listing-details:id' component = { ListingDetails } />
          <Route path = '/all-categories' component = { Category } />
          <Route path = '/all-locations' component = { Location } />
          <Route path = '/pricing-plans' component = { Pricing } />
          <Route path = '/faqs' component = { Faq } />
          <Route path = '/about' component = { About } />
          <Route path = '/contact' component = { Contact } />
          <Route path = '/cards' component = { Cards } />
          <Route path = '/headers' component = { HeaderStyle } />
          <Route path = '/blog-right-sidebar' component = { BlogRightSide } />
          <Route path = '/blog-grid' component = { BlogGrid } />
          <Route path = '/blog-details:id' component = { BlogDetails } />
          <Route path = '/author-profile' component = { AuthProfile } />
          <Route path = '/dashboard-listings' component = { AuthDeshbord } />
          <Route path = '/checkout' component = { CheckoutBasic } />
          <Route path = '/advanced' component = { CheckoutAdvanced } />
          <Route path = '/enterprise' component = { Enterprise } />
          <Route path = '/invoice' component = { Invoice } />
          <Route path = '/add-listing' component = { AddListing } />

        </Switch>
    </Router>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
