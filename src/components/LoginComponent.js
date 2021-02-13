import React, {Component} from 'react';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            display: 'none',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.authenticate(this.state.username, this.state.password);
        this.setState({
            display: 'none'
        });
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    render(){
        return(
            <div className="modal login-modal fade" id="loginWindow" style={{display: this.state.display}} 
            tabIndex="-1" role="dialog" aria-labelledby="loginWindowTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Login Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(values) => this.handleSubmit(values)}>
                                <h5><strong>Log</strong> into <span className="text-primary">Account</span></h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" 
                                        placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" 
                                        placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
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