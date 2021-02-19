/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/fontawesome-free-solid';
import {Form, Control, Errors} from 'react-redux-form';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

const content_vld = (val) => val.length;
class LeaveReview extends Component{
    constructor(props){
        super(props);
        this.state = {
            rate: this.props.userReview.review?this.props.userReview.review.rate:0,
            content: this.props.userReview.review?this.props.userReview.review.content:"",
            rateErr: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (value) => {
        this.setState({rate: value});
    }

    handleSubmit = (values) => {
        if (!this.state.rate){
            this.setState({rateErr: "This field is required"})
        }
        let formData = new FormData();
        formData.append('rate', this.state.rate);
        formData.append('content', values.content);
        if (this.props.userReview.review){
            this.props.updateReview(formData);
            this.props.resetForm();
            this.props.toggle();
        }
        else{
            this.props.addReview(formData);
            this.props.resetForm();
            this.props.toggle();
        }
        return;
    }
    render(){
        var array = [1, 2, 3, 4, 5];
        var rateList = array.map((value) => {
            if (value <= this.state.rate){
                return (
                    <FontAwesomeIcon key={value} icon={faStar} onClick={() => this.handleClick(value)} className="checked"></FontAwesomeIcon>
                );
            }
            return (
                <FontAwesomeIcon key={value} icon={faStar} onClick={() => this.handleClick(value)}></FontAwesomeIcon>
            );
        });
        var reactionEmoji = null;
        switch(this.state.rate){
            case 1: 
                reactionEmoji = (<span id="rate-emoji" className="ec ec-confounded"></span>);
                break;
            case 2: 
                reactionEmoji = (<span id="rate-emoji" className="ec ec-expressionless"></span>);
                break;
            case 3: 
                reactionEmoji = (<span id="rate-emoji" className="ec ec-blush"></span>);
                break;
            case 4: 
                reactionEmoji = (<span id="rate-emoji" className="ec ec-yum"></span>);
                break;
            case 5: 
                reactionEmoji = (<span id="rate-emoji" className="ec ec-heart-eyes"></span>);
                break;
            default:
                reactionEmoji = null;
        }
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="rating-modal" id="rateWindow">
                <ModalHeader toggle={this.props.toggle}>Rate Our Service</ModalHeader>
                <ModalBody>
                    <Form model="review" onSubmit={(values) => this.handleSubmit(values)}>
                        <h5 className="text-center text-primary">
                            {this.props.user && this.props.user.first_name && this.props.user.last_name &&
                            <strong>{this.props.user.first_name} {this.props.user.last_name}'s review</strong>
                            }
                            {this.props.user && !this.props.user.first_name && 
                            <strong>{this.props.user.username}'s review</strong>
                            }
                        </h5>
                        <div className="rating-block mb-2">
                            <span>Rating:</span>
                            {rateList}
                            {reactionEmoji}
                            <span id="rateError" className="text-danger font-weight-bold ml-2" style={{fontSize: 'small'}}>{this.state.rateErr}</span>
                        </div>
                        <div className="form-group">
                            <Control.textarea className="form-control" model=".content" name="content" cols="30" rows="3" id="reviewContent"
                            placeholder="Enter your review here..." validators={{content_vld: content_vld}}>
                            </Control.textarea>
                            <Errors className="text-danger" model=".content" show="touched" messages={{content_vld: "This field is required"}}></Errors>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default LeaveReview;