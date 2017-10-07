import React from 'react';
import styles from '../../styles/Footer.scss';

// Icons
import Linkedin from '../icons/Linkedin.svg';
import Twitter from '../icons/Twitter.svg';

export const Footer = (props) => {
    return (
        <div className="footer">
            <div className="info">
                &copy; Gilles De Block 2017
            </div>
            <div className="social-media">
                <a
                    className="social-media-link"
                    href="https://www.linkedin.com/in/gilles-de-block-b84a0512b/"
                    target="_blank">
                    <Linkedin height="32px" width="32px" />
                </a>
                <a className="social-media-link" href="https://twitter.com/deblok_" target="_blank">
                    <Twitter height="32px" width="32px" />
                </a>
            </div>
        </div>
    );
}