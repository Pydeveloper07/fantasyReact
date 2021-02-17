/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader, Row, Col} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';

const username_vld = (val) => /^[a-z0-9]{2,}$/.test(val);
const name_vld = (val) => /^[A-Z]{1}[a-z]{1,}$/.test(val);
const phone_number_vld = (val) => /^(\+998){1}[0-9]{9}$/.test(val);
const password_vld = (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(val);

class Signup extends Component{
    constructor(props){
        super(props);
        
        this.state={
            password_err: "",
            error_style: {
                fontSize: '0.6em'
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check_password = this.check_password.bind(this);
    }

    handleSubmit = (values) => {
        if (!this.check_password(values.password, values.conf_password)){
            return;
        }
        let formData = new FormData();
        formData.append('avatar', values.avatar[0], values.avatar[0].name);
        formData.append('username', values.username);
        formData.append('first_name', values.first_name);
        formData.append('last_name', values.last_name);
        formData.append('email', values.email);
        formData.append('address', values.address);
        formData.append('phone_number', values.phone_number);
        formData.append('password', values.password);
        this.props.registerNewUser(formData);
        this.props.resetForm();
    }

    check_password = (pass, pass1) => {
        if (pass !== pass1){
            this.setState({password_err: "Passwords don't match"})
            return false;
        }
        this.setState({password_err: ""})
        return true;
    }

    render(){
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    Registration Form
                </ModalHeader>
                <ModalBody >
                    <Form model="signup" id="signUpForm" onSubmit={(values) => this.handleSubmit(values)} encType="multipart/form-data">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <h5 className="text-center text-primary"><strong>Register</strong></h5>
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control.text className="form-control" name="username" model=".username"
                                    validators={{username_vld}} placeholder="Username" required />
                                <Errors className="text-danger" model=".username" show="touched" style={this.state.error_style}
                                    messages={{username_vld: "Only small letters and numbers are allowed and at least 2 characters"}}/>
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control.text className="form-control" name="first_name" model=".first_name" 
                                validators={{name_vld}} placeholder="First Name" />
                                <Errors className="text-danger" model=".first_name" style={this.state.error_style} show="touched" 
                                    messages={{name_vld: "Only letters and should start with a capital letter and at least 2 characters"}} />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control.text className="form-control" name="last_name" model=".last_name" placeholder="Last Name" />
                                <Errors className="text-danger" model=".last_name" style={this.state.error_style} show="touched" 
                                    messages={{name_vld: "Only letters and should start with a capital letter and at least 2 characters"}} />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control type="email" className="form-control" name="email" model=".email" placeholder="Email" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control.text className="form-control" name="address" model=".address" placeholder="Address" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control.text className="form-control" name="phone_number" model=".phone_number" 
                                    validators={{phone_number_vld}} placeholder="Phone Number" />
                                <Errors className="text-danger" model=".phone_number" show="touched" style={this.state.error_style}
                                    messages={{phone_number_vld: "Should be in the format of +998xxxxxxxxx"}} />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control type="password" className="form-control" name="password" model=".password" 
                                    validators={{password_vld}} placeholder="Password" />
                                <Errors className="text-danger" model=".password" show="touched" style={this.state.error_style}
                                    messages={{password_vld: "Should consist of at least 1 capital letter, 1 small letter," + 
                                                            " 1 number, 1 special character, and must be at least length of 6"}} />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <Control type="password" className="form-control" name="conf_password" model=".conf_password" placeholder="Confirm Password" />
                                {this.state.password_err && <small className="text-danger" style={this.state.error_style}>{this.state.password_err}</small>}
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                <Control.file accept="image/*" className="form-control" model=".avatar" name="avatar" />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                                <button type="submit" className="btn btn-primary mb-2">Register</button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Signup;