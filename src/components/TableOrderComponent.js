/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Form, Control} from 'react-redux-form';
import baseUrl from '../redux/baseUrl';
import axios from 'axios';

class TableOrder extends Component{
    constructor(props){
        super(props);
        this.state = {
            startTime: null,
            endTime: null,
            tableErrMsg: null,
            reserveTimeMessage: '',
            capacityErrMsg: '',
            currentTableCapacity: null,
            reservedTimes: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTableDetails = this.getTableDetails.bind(this);
        this.refreshState = this.refreshState.bind(this);
    }

    getTableDetails = (e) => {
        this.setState({currentTableCapacity: this.props.tables.tables.filter((table) => table.id === parseInt(e.target.value))[0].capacity})
        return axios.get(baseUrl + `/api/pages/tables/${parseInt(e.target.value)}/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then((response) => response.data)
            .then((reservedTimes) => this.setState({reservedTimes: reservedTimes}))
            .catch((error) => console.log(error.message));
    }

    refreshState = () => {
        this.setState({
            startTime: null,
            endTime: null,
            tableErrMsg: null,
            reserveTimeMessage: '',
            capacityErrMsg: '',
            currentTableCapacity: null,
            reservedTimes: []
        })
    }

    handleTimeChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (values) => {
        var formData = new FormData();
        formData.append('tableId', values.tableId);
        formData.append('num_of_people', values.numOfPeople);
        formData.append('start_time', this.state.startTime);
        formData.append('end_time', this.state.endTime);
        axios.post(baseUrl + '/api/pages/order-table/', formData, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((data) => {
            if (!data.is_valid){
                if (data.num_of_people_err){
                    this.setState({capacityErrMsg: data.num_of_people_err})
                }
                else{
                    this.setState({capacityErrMsg: ''})
                }
                if (data.time_err){
                    this.setState({reserveTimeMessage: data.time_err})
                }
                else{
                    this.setState({reserveTimeMessage: ''})
                }
            }
            else{
                alert('Table Reservation Success!');
                this.props.resetForm();
                this.refreshState();
                this.props.toggle();
            }
        })
        .catch((error) => console.log(error.message));
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
                            {this.state.currentTableCapacity &&
                            <p className="text-right m-0 text-success"><small><strong>Max. Capacity: </strong>{this.state.currentTableCapacity}</small></p>
                            }
                            <Control type="number" className="form-control" id="numberOfPeople" min="1" model=".numOfPeople"
                            name="num_of_people" required disabled={!this.props.isLoggedIn} />
                            <small><span className="text-danger">{this.state.capacityErrMsg}</span></small>
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
                                <small className="text-danger" id="reserveTimeMessage">{this.state.reserveTimeMessage}</small>
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