/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faPhone, faMapMarker, faWallet} from '@fortawesome/fontawesome-free-solid';
import { faMailBulk, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import EditProfile from './EditProfileComponent';
import baseUrl from '../redux/baseUrl';
import CountTo from 'react-count-to';

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

const UserInfo = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    if (!props.user.user){
        return (
            <div></div>
        );
    }
    return(
        <div className="user-info row">
            <div className="avatar col-md-3 col-lg-3 text-center pt-4">
                {props.user.avatar && 
                <img src={baseUrl + props.user.user.avatar} alt=""></img>
                }
                {!props.user.avatar &&
                <FontAwesomeIcon icon={faUserCircle} className="fa-10x"></FontAwesomeIcon>
                }
            </div>
            <div className="info-content col-md-6 col-lg-6">
                <div className="row">
                    <h4 className="name col-md-12">{props.user.user.username}</h4>
                    <div className="col-md-6 col-sm-12">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <strong>Phone Number:</strong><br /> 
                        {props.user.user.phone_number}
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> <strong>Email:</strong><br />
                        {props.user.user.email}
                    </div>
                    <div className="col-sm-12">
                        <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> <strong>Address:</strong>
                        {props.user.user.address}
                    </div>
                </div>
            </div>
            <div className="status-container col-md-3 col-sm-3">
                <div className="row">
                    <a onClick={() => setIsModalOpen(!isModalOpen)} className="btn btn-edit-profile col-12">
                        Edit profile
                    </a>
                    <EditProfile isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}
                                user={props.user.user}
                                resetEditProfileForm={props.resetEditProfileForm}
                                updateUserDetails={props.updateUserDetails} />
                    <div className="col-12 status mt-2">
                        <div className="vaucher">
                            {props.userStatus && 
                            <h3 className="type text-center text-uppercase">
                                {props.userStatus.status}
                            </h3>
                            }
                            {props.userStatus && 
                            <p className="value text-danger text-center">
                                {props.userStatus.status_bonus}% off for any order                           
                            </p>
                            }
                        </div>
                        <h4 className="text-center text-uppercase text-info">Status</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SectionStatistics = (props) => {
    return(
        <section className="statistics">
            <div className="row">
                <div className="col-md-2 col-sm-12"></div>
                <div className="col-md-4 col-sm-12">
                    <div className="item" id="total-orders">
                        <h2 className="value text-left">
                            <CountTo from={0} to={props.userStatus && props.userStatus.total_orders} speed={1000} />
                        </h2>
                        <p className="title">Total orders</p>
                        <FontAwesomeIcon icon={faShoppingCart} className="fa-3x custom-i"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="item" id="total-expenses">
                        <h2 className="value text-left">
                            <CountTo from={0} to={props.userStatus && props.userStatus.total_expenses} speed={2000} />
                        </h2>
                        <p className="title">Total expenses</p>
                        <FontAwesomeIcon icon={faWallet} className="fa-3x custom-i"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="col-md-2 col-sm-12"></div>
            </div>
        </section>
    );
}

const RenderOrderItem = (props) => {
    return(
        <div className="item row">
            <div className="col-1">
                <span className="badge badge-secondary">{props.item.id + 1}.</span>
            </div>
            <div className="col-10">
                <p className="item-name">
                    {props.item.name}
                </p>
            </div>
            <div className="col-1">
                <span className="badge badge-primary">{props.item.quantity}</span>
            </div>
        </div>
    );
}

const RenderOrder = (props) => {
    var orderItemsList = props.order.items.map((item) => {
        return(
            <RenderOrderItem key={item.id} item={item} />
        );
    });
    return(
        <div className="order-block row mb-3">
            <div className="col-3">
                <div className="order-name text-center">
                    <span>№{props.order.id + 1}</span>
                </div>
            </div>
            <div className="col-6">
                <div className="order-details flex-column">
                    {orderItemsList}
                </div>
                <div className="col-12 text-center">
                    <div className="summary">
                        <p>
                            Total cost(+delivery fee): <span className="badge badge-success">{props.order.totalCost}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="date-block text-center">
                    <span>{props.order.created_date.substr(0, 10)}</span>
                    <span>{props.order.created_date.substr(11, 5)}</span>
                </div>
            </div>
        </div>
    );
}
const SectionActiveTableOrders = (props) => {
    const orderList = props.orders.tables.length > 0?props.orders.tables.map((table, index) => {
        return (
            <h4 key={table.id} className="text-success col-4"><span className="text-danger">{index+1}. Table#{table.id}</span> {table.start_time.substr(0, 5)} - {table.end_time.substr(0, 5)}</h4>
        );
    }):null;
    return (
        <section className="history mb-5">
            <h2 className="text-center text-info mb-4">Your active table orders</h2>
            <div className="row">
                {props.orders.tables.length === 0 && 
                <h4 className="text-warning">You currently have no tables ordered!</h4>
                }
                {orderList}
            </div>
        </section>
    );
}

const SectionHistory = (props) => {
    if (props.orderHistory.orders.length === 0){
        return (
            <div></div>
        );
    }
    var orderList = props.orderHistory.orders.map((order) => {
        return(
            <RenderOrder key={order.id} order={order} />
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
                    <UserInfo user={this.props.user}
                            resetEditProfileForm={this.props.resetEditProfileForm}
                            updateUserDetails={this.props.updateUserDetails}
                            userStatus={this.props.userStatus} />
                    <SectionStatistics userStatus={this.props.userStatus} />
                    <SectionActiveTableOrders orders={this.props.userOrderedTables} />
                    <SectionHistory orderHistory={this.props.orderHistory} />
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;