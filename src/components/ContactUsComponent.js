import React, {Component} from 'react';

class ContactUs extends Component{
    render(){
        return(
            <div className="modal reg-modal fade" id="contactUsWindow" tabIndex="-1" role="dialog"
            aria-labelledby="contactUsWindowTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Contact Us Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="contactForm">
                                <h5 className="alert alert-danger">You are not logged in!</h5>
                                <h5 className="text-center text-primary"><strong>Contact Us</strong></h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" name="username" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" cols="30" rows="3"
                                        placeholder="Enter your message here..."></textarea>
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

export default ContactUs;