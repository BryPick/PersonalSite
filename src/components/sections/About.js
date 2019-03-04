import React, { Component } from 'react';
import RITTiger from "../../resources/svgs/rittigerwhite.svg";
import BryanPic from '../../resources/img/BryanProfessionalPic.png';

class About extends Component {
    render() {
        return (
            <div className="section" id="about">
                <div className="section-title">
                    <h1>A B O U T  <span id="word-me">M E</span></h1>
                </div>
                <div className="section-content">
                    <div id="personal-pic">
                        <img src={BryanPic} alt={bryanPicAlt}/>
                    </div>
                    <div className="text-content">
                        <p className="section-content-title">Bio:</p>
                        <p className="section-content-body">
                            Hi! My name is Bryan. I've been doing front and back
                            end coding for about 4 years. As an RIT grad, I've experienced countless
                            group development projects, each one forcing me to think and overcome hurdles. Overall,
                            I love learning more and meeting new people. I also love football, video games, anime, and cooking.
                        </p>
                    </div>
                </div>
                <div className="section-content">
                    <div className="svg-img">
                        <img src={RITTiger} alt={ritTigerImgAlt}/>
                    </div>
                    <div className="text-content">
                        <p className="section-content-title">Education:</p>
                        <p className="section-content-body">Rochester Institute of Technology</p>
                        <p className="section-content-body">Bachelors in Information Technology</p>
                        <p className="section-content-body">Graduated December 2018</p>
                    </div>
                </div>
            </div>
        )
    }
}

const bryanPicAlt = "Bryan Pickering Pic",
        ritTigerImgAlt = "RIT Tiger";

export default About;