import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/fontawesome-free-solid';

const Footer = () => {
    return(
        <footer className="position-relative">
            <div className="footer-top-image">
                <img src="assets/images/ink_white_footer.png" alt="" />
            </div>
            <div className="row m-0">
                <div className="col-md-4 col-lg-4 position-relative">
                    <img src="assets/images/limonPattern_left.png" alt="" className="left wow fadeInLeft" />
                </div>
                <div className="col-md-4 col-lg-4 container">
                    <h1 className="fantasy text-center"><a href="#"> <img src="assets/images/logo.png" alt="logo" /></a></h1>
                    <div className="contact">
                        <ul className="list-unstyled">
                            <li className="contact-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fas fa-2x float-left"></FontAwesomeIcon>
                                <span className="pl-1">Ziyolilar st, Mirzo Ulugbek <br /> dis. Tashkent Uzbekistan</span>
                            </li>
                            <li className="contact-item">
                                <FontAwesomeIcon icon={faPhone} className="fas fa-2x float-left"></FontAwesomeIcon>
                                <span className="pl-1">+99871 268-41-23</span>
                            </li>
                            <li className="contact-item">
                                <FontAwesomeIcon icon={faEnvelope} className="far fa-2x float-left"></FontAwesomeIcon>
                                <span className="pl-1">fantasy@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 position-relative">
                    <img src="assets/images/limonPattern_right.png" alt="" className="right wow fadeInRight" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;