import React, { Component } from 'react';
import SkillType from './SkillType';
import { CSSTransitionGroup } from 'react-transition-group';

const languageTypes =  [
    {
        typeId: 1,
        index: 0,
        typeName: 'Front End'
    },
    {
        typeId: 2,
        index: 1,
        typeName: 'Back End'
    },
    {
        typeId: 3,
        index: 2,
        typeName: 'Database'
    },
    {
        typeId: 4,
        index: 3,
        typeName: 'Repository'
    },
    {
        typeId: 5,
        index: 4,
        typeName: 'Adobe'
    }
];
const languages =  [
    {
        "id": 1,
        "languageName": 'HTML',
        "skillRating": 100,
        "languageIcon": 'htmlIcon.svg',
        "languageType": 'Front End'
    },
    {
        "id": 2,
        "languageName": 'CSS/SASS',
        "skillRating": 100,
        "languageIcon": 'cssandsass.svg',
        "languageType": 'Front End'
    },
    {
        "id": 3,
        "languageName": 'JS/ES6',
        "skillRating": 90,
        "languageIcon": 'javascript.svg',
        "languageType": 'Front End'
    },
    {
        "id": 4,
        "languageName": 'JQuery',
        "skillRating": 90,
        "languageIcon": 'jquery.svg',
        "languageType": 'Front End'
    },
    {
        "id": 5,
        "languageName": 'Bootstrap',
        "skillRating": 90,
        "languageIcon": 'bootstrap.svg',
        "languageType": 'Front End'
    },
    {
        "id": 6,
        "languageName": 'React',
        "skillRating": 50,
        "languageIcon": 'react.svg',
        "languageType": 'Front End'
    },
    {
        "id": 7,
        "languageName": 'PHP',
        "skillRating": 90,
        "languageIcon": 'phpicon.svg',
        "languageType": 'Back End'
    },
    {
        "id": 8,
        "languageName": 'Java',
        "skillRating": 90,
        "languageIcon": 'java.svg',
        "languageType": 'Back End'
    },
    {
        "id": 9,
        "languageName": 'C#',
        "skillRating": 70,
        "languageIcon": 'csharp.svg',
        "languageType": 'Back End'
    },
    {
        "id": 10,
        "languageName": 'Node JS',
        "skillRating": 40,
        "languageIcon": 'nodejs.svg',
        "languageType": 'Back End'
    },
    {
        "id": 11,
        "languageName": 'Python',
        "skillRating": 10,
        "languageIcon": 'python.svg',
        "languageType": 'Back End'
    },
    {
        "id": 12,
        "languageName": 'MySQL',
        "skillRating": 90,
        "languageIcon": 'mysql.svg',
        "languageType": 'Database'
    },
    {
        "id": 13,
        "languageName": 'Postgres',
        "skillRating": 70,
        "languageIcon": 'postgres.svg',
        "languageType": 'Database'
    },
    {
        "id": 14,
        "languageName": 'Microsoft Access',
        "skillRating": 40,
        "languageIcon": 'access.svg',
        "languageType": 'Database'
    },
    {
        "id": 15,
        "languageName": 'GitHub',
        "skillRating": 90,
        "languageIcon": 'github.svg',
        "languageType": 'Repository'
    },
    {
        "id": 16,
        "languageName": 'Subversion',
        "skillRating": 50,
        "languageIcon": 'subversion.svg',
        "languageType": 'Repository'
    },
    {
        "id": 17,
        "languageName": 'Photoshop',
        "skillRating": 80,
        "languageIcon": 'photoshop.svg',
        "languageType": 'Adobe'
    },
    {
        "id": 18,
        "languageName": 'Illustrator',
        "skillRating": 80,
        "languageIcon": 'illustrator.svg',
        "languageType": 'Adobe'
    },
];
const noClick = {
    pointerEvents: 'none'
};

class Skills extends Component {
    state = {
        currLangType: languageTypes[0]
    };

    disableNext = () => {
        if(this.state.currLangType.index === languageTypes.length-1) {
           return noClick;
        }
    };

    disablePrev = () => {
        if(this.state.currLangType.index === 0) {
            return noClick;
        }
    };

    nextLanguage = () => {
        const newIndex = this.state.currLangType.index+1;
        this.setState({
            currLangType: languageTypes[newIndex]
        })
    };

    prevLanguage = () => {
        const newIndex = this.state.currLangType.index-1;
        this.setState({
            currLangType: languageTypes[newIndex]
        })
    };

    render() {
        const {typeId, typeName} = this.state.currLangType;
        return (
            <div className="section" id="skills">
                <div className="section-title">
                    <h1>S K I L L S</h1>
                </div>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={650}
                    transitionLeaveTimeout={5}
                    id="lang-types-container">
                    <SkillType key={typeId} skillType={typeName} skills={languages}/>
                </CSSTransitionGroup>
                <div id="lang-type-nav">
                    <div onClick={() => this.prevLanguage()} style={this.disablePrev()}>Prev</div>
                    <div onClick={() => this.nextLanguage()} style={this.disableNext()}>Next</div>
                </div>
            </div>
        )
    }
}

export default Skills;