import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader, Row, Col} from 'reactstrap';

class Signup extends Component{
    render(){
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    <h5 className="modal-title" id="exampleModalLongTitle">Registration Form</h5>
                </ModalHeader>
                <ModalBody >
                    <form id="signUpForm" encType="multipart/form-data">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <h5 className="text-center text-primary"><strong>Register</strong></h5>
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Username" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="text" className="form-control" name="first_name" placeholder="First Name" />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="text" className="form-control" name="address" placeholder="Address" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="text" className="form-control" name="phone_number" placeholder="Phone Number" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" required />
                            </Col>
                            <Col md={6} lg={6} className="form-group">
                                <input type="password" className="form-control" name="conf_password" placeholder="Confirm Password" required />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} className="form-group">
                                <input type="file" accept="image/*" className="form-control" name="avatar" />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                                <button type="submit" className="btn btn-primary mb-2">Register</button>
                            </Col>
                        </Row>
                    </form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Signup;