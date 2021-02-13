/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faPhone, faMapMarker, faWallet} from '@fortawesome/fontawesome-free-solid';
import { faMailBulk, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import EditProfile from './EditProfileComponent';

const DashboardHeader = () => {
    return(
        <section className="dashboard-header position-relative">
            <div className="title">
                <h3>Welcome, Tukhtamurod Isroilov</h3>
            </div>
            <div className="hero-footer-image">
                <img src="assets/images/ink white.png" alt="" />
            </div>
        </section>
    );
}

const UserInfo = () => {
    return(
        <div className="user-info row">
            <div className="avatar col-md-3 col-lg-3 text-center pt-4">
                {/* <img src="{{user.custom_user.avatar.url}}" alt=""> */}
                <FontAwesomeIcon icon={faUserCircle} className="fa-10x"></FontAwesomeIcon>
            </div>
            <div className="info-content col-md-6 col-lg-6">
                <div className="row">
                    <h4 className="name col-md-12">Tukhtamurod Isroilov</h4>
                    <div className="col-md-6 col-sm-12">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <strong>Phone Number:</strong><br /> 
                        +998997779988
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> <strong>Email:</strong><br />
                        inha07111999@gmail.com
                    </div>
                    <div className="col-sm-12">
                        <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> <strong>Address:</strong>
                        Toshkent shahri, Yunusobod tumani, 17chi kvartal
                    </div>
                </div>
            </div>
            <div className="status-container col-md-3 col-sm-3">
                <div className="row">
                    <a className="btn btn-edit-profile col-12" data-toggle="modal" data-target="#editProfileWindow">
                        Edit profile
                    </a>
                    <div className="col-12 status mt-2">
                        <div className="vaucher">
                            <h3 className="type text-center text-uppercase">
                                None
                            </h3>
                            <p className="value text-danger text-center">
                                0% off for any order                           
                            </p>
                        </div>
                        <h4 className="text-center text-uppercase text-info">Status</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SectionStatistics = () => {
    return(
        <section className="statistics">
            <div className="row">
                <div className="col-md-3 col-sm-12"></div>
                <div className="col-md-3 col-sm-12">
                    <div className="item" id="total-orders">
                        <h2 className="value text-left timer" data-from="0" data-to="71" data-speed="1000">0</h2>
                        <p className="title">Total orders</p>
                        <FontAwesomeIcon icon={faShoppingCart} className="fa-3x custom-i"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="item" id="total-expenses">
                        <h2 className="value text-left"><span className="timer" data-from="0" data-to="10000"
                                data-speed="2000">0</span></h2>
                        <p className="title">Total expenses</p>
                        <FontAwesomeIcon icon={faWallet} className="fa-3x custom-i"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12"></div>
            </div>
        </section>
    );
}

const RenderOrderItem = () => {
    return(
        <div className="item row">
            <div className="col-1">
                <span className="badge badge-secondary">1.</span>
            </div>
            <div className="col-10">
                <p className="item-name">
                    Manti
                </p>
            </div>
            <div className="col-1">
                <span className="badge badge-primary">5</span>
            </div>
        </div>
    );
}

const RenderOrder = (props) => {
    var orders = ['Manti', 'Shashlik', 'Pizza'];
    var orderItemsList = orders.map((order) => {
        return(
            <RenderOrderItem name={order} />
        );
    });
    return(
        <div className="order-block row mb-3">
            <div className="col-3">
                <div className="order-name text-center">
                    <span>№{props.orderNumber}</span>
                </div>
            </div>
            <div className="col-6">
                <div className="order-details flex-column">
                    {orderItemsList}
                </div>
                <div className="col-12 text-center">
                    <div className="summary">
                        <p>
                            Total cost(+delivery fee): <span class="badge badge-success">250,000</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="date-block text-center">
                    <span>28/10/2019</span>
                </div>
            </div>
        </div>
    );
}

const SectionHistory = () => {
    var arr = [1, 2, 3];
    var orderList = arr.map((value) => {
        return(
            <RenderOrder key={value} orderNumber={value} />
        );
    });
    return(
        <section className="history mb-5">
            <h2 className="text-center text-info mb-4">Here is your order history</h2>
            <div className="row">
                <div className="col-12">
                    {orderList}
                    <hr />
                </div>
            </div>
        </section>
    );
}

class Dashboard extends Component{
    render(){
        return(
            <React.Fragment>
                <DashboardHeader />
                <div className="container">
                    <UserInfo />
                    <SectionStatistics />
                    <SectionHistory />
                </div>
                <EditProfile />
            </React.Fragment>
        );
    }
}

export default Dashboard;