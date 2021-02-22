/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';

const email_vld = (val) => val.trim() !== "";
const message_vld = (val) => val.trim() !== "";
const subject_vld = (val) => val.trim() !== "";

class ContactUs extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (values) => {
        var formData = new FormData();
        formData.append('subject', values.subject);
        formData.append('email', values.email);
        formData.append('message', values.message);
        this.props.postForm(formData);
        this.props.resetForm();
        this.props.toggle();
    }
    render(){
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="reg-modal" id="contactUsWindow">
                <ModalHeader toggle={this.props.toggle}>Contact Us Form</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(values) => this.handleSubmit(values)} model="contact" id="contactForm">
                        <h5 className="text-center text-primary"><strong>Contact Us</strong></h5>
                        <div className="form-group">
                            <Control.text model=".subject" className="form-control" placeholder="Subject" name="subject" required
                                validators={{subject: subject_vld}} />
                            <Errors model=".subject" className="text-danger text-left" show="touched" messages={{subject: "This field is required"}}></Errors>
                        </div>
                        <div className="form-group">
                            <Control type="email" model=".email" className="form-control" placeholder="Email" name="email" required
                                validators={{email: email_vld}}/>
                            <Errors model=".email" className="text-danger text-left" show="touched" messages={{email: "This field is required"}}></Errors>
                        </div>
                        <div className="form-group">
                            <Control.textarea model=".message" className="form-control" name="message" cols="30" rows="3"
                                placeholder="Enter your message here..." required
                                validators={{message: message_vld}} ></Control.textarea>
                            <Errors className="text-danger text-left" model=".message" show="touched" 
                                messages={{message: "This field is required"}}></Errors>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default ContactUs;