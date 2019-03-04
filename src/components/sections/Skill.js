import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        }
    }

    render() {
        const {languageName, skillRating, languageIcon} = this.props.skill;
        return (
            <div className="language-row">
                <div className="language-name">
                    <p>{languageName}</p>
                </div>
                <div className="language-graph">
                    <div className="language-icon">
                        <img src={require(`../../resources/svgs/${languageIcon}`)} alt={langIconAlt}/>
                    </div>
                    <div className="language-rating">
                        <div className="rating" style={{width: skillRating+'%'}}>
                            <p>{skillRating}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const langIconAlt = "Language icon";

export default Skill;