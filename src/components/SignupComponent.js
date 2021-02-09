import React, {Component} from 'react';

class Signup extends Component{
    render(){
        return(
            <div className="modal reg-modal fade" id="registrationWindow" tabIndex="-1" role="dialog"
            aria-labelledby="registrationWindowTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Registration Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="signUpForm" encType="multipart/form-data">
                                <h5 className="text-center text-primary"><strong>Register</strong></h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="first_name" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="address" placeholder="Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="phone_number" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="conf_password" placeholder="Confirm Password" required />
                                </div>
                                <div className="form-group">
                                    <input type="file" accept="image/*" className="form-control" name="avatar" />
                                </div>     
                                <button type="submit" className="btn btn-primary mb-2">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;