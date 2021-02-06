import React, {Component} from 'react';

class EditProfile extends Component{
    render(){
        return(
            <div className="modal edit-modal fade" id="editProfileWindow" tabIndex="-1" role="dialog"
            aria-labelledby="editProfileWindowTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Profile Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form enctype="multipart/form-data" id="editProfileForm">
                                <h5 className="text-center text-primary"><strong>Edit your info</strong></h5>
                                <div className="form-group">
                                    <label for="username">Username:</label>
                                    <input type="text" className="form-control" name="username" value="Black@Tiger" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <label for="first_name">First Name:</label>
                                    <input type="text" className="form-control" name="first_name" value="Tukhtamurod" placeholder="First Name" required />
                                </div>
                                <div className="form-group">
                                    <label for="last_name">Last Name:</label>
                                    <input type="text" className="form-control" name="last_name" value="Isroilov" placeholder="Last Name" required />
                                </div>
                                <div className="form-group">
                                    <label for="address">Address:</label>
                                    <input type="address" className="form-control" placeholder="Address" name="address"
                                        value="Toshkent shahri" required />
                                </div>
                                <div className="form-group">
                                    <label for="phone_number">Phone Number:</label>
                                    <input type="text" className="form-control" placeholder="Phone Number" name="phone_number"
                                        value="+998997779988" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" className="form-control" placeholder="Email" name="email" value="example@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label for="email">User Avatar:</label>
                                    {/* <p>Current file:<a href="#" data-lightbox="user_avatar"><small class="text-primary"></small></a></p> */}
                                    <input type="file" className="form-control" accept="image/*" name="avatar" />
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;