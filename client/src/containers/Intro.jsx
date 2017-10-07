import React from "react";
import styles from "../../styles/Intro.scss";

export class Intro extends React.Component {
    render() {
        return (
            <div className="intro-container page">
                <div className="profile-container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="../img/profile_pic.jpg" alt=""/>
                        </div>
                        <div className="profile-description">
                            <div className="title">
                                <h1>Gilles De Block</h1>
                            </div>
                            <div className="content">
                                <p>I'm a 21 year old, recently graduated student currently living in Ledeberg. I
                                    graduated at HoGent, where I studied Applied Informatics (2014-2017).</p>
                                <p>
                                    When I started studying at HoGent, I soon found out that webdevelopment was
                                    something that interested me greatly. I enjoy both frontend and backend
                                    development, although my preferences do lie with frontend development.
                                </p>
                                <p>You may always contact me using the following e-mail:
                                    <a href="mailto:gillesdeblock2@gmail.com" target="_top">gillesdeblock2@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}