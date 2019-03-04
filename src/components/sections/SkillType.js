import React, { Component } from 'react';
import Skill from './Skill';

class SkillType extends Component {

    checkSkillType = (skill, skillType) => {
        if(skill.languageType === skillType) {
            return true;
        }
    };

    render() {
        return (
            <div className="language-type" id={this.props.skillType}>
                <div className="top-row">
                    <h1 className="language-type-title">{this.props.skillType}</h1>
                    <div className="rating-names">
                        <p>Beginner</p>
                        <p>Intermediate</p>
                        <p>Expert</p>
                    </div>
                </div>
                {this.props.skills.map((skill) => {
                    if(this.checkSkillType(skill,this.props.skillType))
                        return (
                            <Skill key={skill.id} skill={skill}/>
                        )
                })}
            </div>
        );
    }
}

export default SkillType;