import React, { Component } from 'react';
import Envelope from '../../resources/svgs/envelope-solid-white.svg';
import LinkedIn from '../../resources/svgs/linkedin-brands-white.svg';
import Download from '../../resources/svgs/Download-white.svg';
import Phone from "../../resources/svgs/phone-call.svg";

class Contact extends Component {
    render() {
        return (
            <div className="section" id="contact">
                <div className="section-title">
                    <h1>C O N T A C T</h1>
                </div>
                <div className="section-content">
                    <div id="contact-img">
                        <img src={Phone} alt={phoneAlt}/>
                    </div>
                    <div id="contact-info">
                        <div className="contact-content">
                            <p className="section-content-body"><img src={Envelope} alt={envelopedAlt}/>bxp9452@g.rit.edu</p>
                        </div>
                        <div className="contact-content">
                            <p className="section-content-body"><img src={LinkedIn} alt={linkedInAlt}/><a href="https://www.linkedin.com/in/bryan-pickering/">linkedin.com/in/bryan-pickering/</a></p>
                        </div>
                        <div className="contact-content">
                            <p className="section-content-body"><img src={Download} alt={downloadAlt}/><a href={process.env.PUBLIC_URL + '/BryanPickeringResume.pdf'}>Download my resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const phoneAlt = "Phone Icon",
        envelopedAlt = "Envelope Icon",
        linkedInAlt = "LinkedIn Icon",
        downloadAlt = "Download Icon";

export default Contact;