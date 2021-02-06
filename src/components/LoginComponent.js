import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="modal login-modal fade" id="loginWindow" tabIndex="-1" role="dialog" aria-labelledby="loginWindowTitle"
            aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Login Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <h5><strong>Log</strong> into <span className="text-primary">Account</span></h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">Login</button>
                            </form>
                        </div>
                        <img src="assets/images/ice-tea.png" alt="" className="login-bg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;