/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';
import baseUrl from '../redux/baseUrl';
import axios from 'axios';

class TableOrder extends Component{
    constructor(props){
        super(props);
        this.state = {
            startTime: null,
            endTime: null,
            tableErrMsg: null,
            reservedTimes: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableDetails = this.getTableDetails.bind(this);
    }

    getTableDetails = (e) => {
        return axios.get(baseUrl + `/api/pages/tables/${parseInt(e.target.value)}/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then((response) => response.data)
            .then((reservedTimes) => this.setState({reservedTimes: reservedTimes}))
            .catch((error) => console.log(error.message));
    }

    handleTimeChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (values) => {
        this.props.resetForm();
        this.props.toggle();
    }
    render(){
        var tableList = [];
        var reservedTimesList = this.state.reservedTimes.map((reservation) => {
            return (
                <span key={reservation.id}>{reservation.start_time.substr(0, 5)}-{reservation.end_time.substr(0, 5)}</span>
            );
        });
        if (!this.props.tables || (!this.props.tables.tables || this.props.tables.errMsg)){
            tableList.push(null);
        }
        else{
            tableList = this.props.tables.tables.map((table) => {
                return (
                    <option key={table.id} value={table.id}>Table #{table.id}</option>
                );
            });
        }
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="reg-modal" id="orderTableWindow">
                <ModalHeader toggle={this.props.toggle}>Table Reservation Form</ModalHeader>
                <ModalBody>
                    <Form model="orderTable" onSubmit={(values) => this.handleSubmit(values)} id="tableOrderForm">
                        {!this.props.isLoggedIn &&
                        <h5 className="alert alert-danger">You are not logged in!</h5>
                        }
                        <h5 className="text-center text-primary"><strong>Get your table easily!</strong></h5>
                        <div className="form-group">
                            <Control.select className="form-control" model=".tableId" name="tableId" id="tables" 
                                disabled={!this.props.isLoggedIn} onChange={this.getTableDetails}>
                                <option disabled value="">Choose your table</option>
                                {tableList}
                            </Control.select>
                            <small id="tableHelp" className="form-text text-danger font-weight-bold">
                                {reservedTimesList.length > 0 && <span className="text-warning">Reserved:&nbsp;</span>}
                                {reservedTimesList}
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="numberOfPeople">How many are you?</label>
                            <Control type="number" className="form-control" id="numberOfPeople" min="1" model=".numOfPeople"
                            name="num_of_people" required disabled={!this.props.isLoggedIn} />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="reserveStartTime">from</label>
                                    <input type="time" className="form-control" model=".startTime" id="reserveStartTime" name="startTime" 
                                        required disabled={!this.props.isLoggedIn} onChange={this.handleTimeChange} />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="reserveEndTime">to</label>
                                    <input type="time" className="form-control" model=".endTime" id="reserveEndTime" name="endTime" 
                                        required disabled={!this.props.isLoggedIn} onChange={this.handleTimeChange} />
                                </div>
                                <small id="reserveTimeMessage"></small>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2" disabled={!this.props.isLoggedIn}>Reserve</button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default TableOrder;