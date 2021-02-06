import React, {Component} from 'react';
import Navbar from './NavbarComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import ContactUs from './ContactUsComponent';
import TableOrder from './TableOrderComponent';

class Main extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path='/home' component={Home} />
                    {/* <Route path='/menu' component={Menu} />
                    <Route path='/drinks' component={Drinks} />
                    <Route path='/dashboard' component={Dashboard} /> */}
                    <Redirect to='/home' />
                </Switch>
                <Login />
                <Signup />
                <ContactUs />
                <TableOrder />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;