/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';
import baseUrl from '../redux/baseUrl';

const username_vld = (val) => /^[a-z0-9]{2,}$/.test(val);
const name_vld = (val) => /^[A-Z]{1}[a-z]{1,}$/.test(val);
const phone_number_vld = (val) => /^(\+998){1}[0-9]{9}$/.test(val);

class EditProfile extends Component{
    constructor(props){
        super(props);
        
        this.state={
            error_style: {
                fontSize: '0.6em'
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values) => {
        let formData = new FormData();
        if (values.avatar){
            formData.append('avatar', values.avatar[0], values.avatar[0].name);
        }
        else{
            formData.append('avatar', '');
        }
        formData.append('username', values.username);
        formData.append('first_name', values.first_name);
        formData.append('last_name', values.last_name);
        formData.append('email', values.email);
        formData.append('address', values.address);
        formData.append('phone_number', values.phone_number);
        this.props.updateUserDetails(formData);
        this.props.resetEditProfileForm();
        this.props.toggle();
    }

    render(){
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="edit-modal" id="editProfileWindow">
                <ModalHeader toggle={this.props.toggle}>Edit Profile Form</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(values) => this.handleSubmit(values)} model="editProfile" className="row" encType="multipart/form-data">
                        <h5 className="text-center text-primary col-12"><strong>Edit your info</strong></h5>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="username">Username:</label>
                            <Control.text className="form-control" model=".username" name="username" defaultValue={this.props.user.username} 
                                validators={{username_vld}} placeholder="Username" required />
                            <Errors className="text-danger" model=".username" style={this.state.error_style} show="touched"
                                messages={{username_vld: "Only small letters and numbers are allowed and at least 2 characters"}} />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="first_name">First Name:</label>
                            <Control.text className="form-control" model=".first_name" name="first_name" defaultValue={this.props.user.first_name} 
                                validators={{name_vld}} placeholder="First Name" required />
                            <Errors className="text-danger" model=".first_name" style={this.state.error_style} show="touched"
                                messages={{name_vld: "Only letters and should start with a capital letter and at least 2 characters"}} />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="last_name">Last Name:</label>
                            <Control.text className="form-control" model=".last_name" name="last_name" defaultValue={this.props.user.last_name} 
                                validators={{name_vld}} placeholder="Last Name" required />
                            <Errors className="text-danger" model=".last_name" style={this.state.error_style} show="touched"
                                messages={{name_vld: "Only letters and should start with a capital letter and at least 2 characters"}} />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="address">Address:</label>
                            <Control type="address" className="form-control" model=".address" placeholder="Address" name="address"
                                defaultValue={this.props.user.address} required />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="phone_number">Phone Number:</label>
                            <Control.text className="form-control" model=".phone_number" placeholder="Phone Number" name="phone_number"
                                validators={{phone_number_vld}} defaultValue={this.props.user.phone_number} required />
                            <Errors className="text-danger" model=".phone_number" style={this.state.error_style} show="touched"
                                messages={{phone_number_vld: "Should be in the format of +998xxxxxxxxx"}} />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <label htmlFor="email">Email:</label>
                            <Control type="email" className="form-control" model=".email" placeholder="Email" name="email" defaultValue={this.props.user.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">User Avatar:</label>
                            {this.props.user.avatar &&
                            <p>Current file:<a href={baseUrl + this.props.user.avatar}><small class="text-primary">{this.props.user.avatar}</small></a></p>                            
                            }
                            <Control.file className="form-control" model=".avatar" accept="image/*" name="avatar" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default EditProfile;