import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/fontawesome-free-solid';

class LeaveReview extends Component{
    render(){
        return(
            <div className="modal rating-modal fade" id="rateWindow" tabIndex="-1" role="dialog" aria-labelledby="rateWindowTitle"
            aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Rate Our Service</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="reviewForm">
                                <h5 className="text-center alert alert-danger"><strong>You must login first!</strong></h5>
                                <h5 className="text-center text-primary">
                                    <strong>Tukhtamurod Isroilov's review</strong>
                                </h5>
                                <div className="rating-block">
                                    <span>Rating:</span>
                                    <FontAwesomeIcon icon={faStar} className="fa star checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="fa star checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="fa star checked"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="fa star"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar} className="fa star"></FontAwesomeIcon>
                                    <span id="rate-emoji"></span>
                                    <span id="rateError" className="text-danger font-weight-bold" style={{fontSize: 'small', display: 'none'}}>This field is required</span>
                                    <p><small>4.3 average based on 200 reviews</small></p>
                                </div>
                                <input type="hidden" name="rating" id="rating" />
                                <input type="hidden" name="review_status" id="reviewStatus" />
                                <div className="form-group">
                                    <textarea className="form-control" name="content" cols="30" rows="3" id="reviewContent"
                                    placeholder="Enter your review here..." disabled></textarea>
                                    <span id="reviewContentError" className="text-danger font-weight-bold" style={{fontSize: 'small', display: 'none'}}>This field is required</span>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeaveReview;