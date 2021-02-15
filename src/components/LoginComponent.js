import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.auth(this.state.username, this.state.password);
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
            <Modal className="login-modal" isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    Login Form
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={(values) => this.handleSubmit(values)}>
                        <h5><strong>Log</strong> into <span className="text-primary">Account</span></h5>
                        {this.props.login.errMsg && (<h5 className="text-danger">{this.props.login.errMsg}</h5>)}
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
                </ModalBody>
                <img src="assets/images/ice-tea.png" alt="" className="login-bg" />
            </Modal>
        );
    }
}

export default Login;