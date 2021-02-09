import React, {Component} from 'react';

class TableOrder extends Component{
    render(){
        return(
            <div className="modal reg-modal fade" id="orderTableWindow" tabIndex="-1" role="dialog"
            aria-labelledby="orderTableWindowTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Table Reservation Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="tableOrderForm">
                                <h5 className="alert alert-danger">You are not logged in!</h5>
                                <h5 className="text-center text-primary"><strong>Get your table easily!</strong></h5>
                                <div className="form-group">
                                    <select className="form-control" name="tableId" aria-describedby="tableHelp" id="tables" disabled>
                                        <option disabled defaultValue=''>Choose your table</option>
                                    </select>
                                    <small id="tableHelp" className="form-text text-danger font-weight-bold"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numberOfPeople">How many are you?</label>
                                    <input type="number" className="form-control" id="numberOfPeople" min="1"
                                    name="num_of_people" required disabled />
                                    <small className="text-danger err-message"></small>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="reserveStartTime">from</label>
                                            <input type="time" className="form-control" id="reserveStartTime" name="from" required disabled />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="reserveEndTime">to</label>
                                            <input type="time" className="form-control" id="reserveEndTime" name="to" required disabled />
                                        </div>
                                        <small id="reserveTimeMessage"></small>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2" disabled>Reserve</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableOrder;