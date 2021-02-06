import React from 'react';

const Alert = () => {
    return(
        <div id="alertPanel">
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error:</strong>Something went wrong
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
}

export default Alert;