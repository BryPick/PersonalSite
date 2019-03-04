import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import HomeIcon from '../../resources/svgs/home.svg';

class Credits extends Component{
    state = {
        sources1: [
            {
                "Name": 'HTML 5 Logo',
                "Source": "https://fontawesome.com/icons/html5?style=brands",
                "License": "https://fontawesome.com/license"
            },
            {
                "Name": 'CSS 3 icon made from Icon Fonts is licensed by CC BY 3.0',
                "Source": "https://www.onlinewebfonts.com/icon/565439",
                "License": ""
            },
            {
                "Name": 'SASS Logo:',
                "Source": "https://sass-lang.com/styleguide/brand",
                "License": ""
            },
            {
                "Name": 'Javascript Logo:',
                "Source": "https://www.iconfinder.com/icons/282802/javascript_js_icon",
                "License": ""
            },
            {
                "Name": 'JQuery icon made from Icon Fonts is licensed by CC BY 3.0',
                "Source": "https://www.onlinewebfonts.com/icon/435950",
                "License": ""
            },
            {
                "Name": 'Bootstrap Logo:',
                "Source": "https://commons.wikimedia.org/wiki/File:Boostrap_logo.svg",
                "License": ""
            },
            {
                "Name": 'React Logo:',
                "Source": "https://worldvectorlogo.com/logo/react",
                "License": ""
            },
            {
                "Name": 'Download Icon:',
                "Source": "https://fontawesome.com/icons/file-download?style=solid",
                "License": "https://fontawesome.com/license"
            },
            {
                "Name": 'Envelope Icon:',
                "Source": "https://fontawesome.com/icons/envelope?style=solid",
                "License": "https://fontawesome.com/license"
            },
            {
                "Name": 'LinkedIn icon made by Google:',
                "Source": "https://www.flaticon.com/free-icon/linkedin-logo_61109",
                "License": ""
            },
            {
                "Name": 'Illustrator Logo made by Freepik:',
                "Source": "https://www.flaticon.com/free-icon/adobe-illustrator_1759",
                "License": ""
            },
            {
                "Name": 'RIT Logo:',
                "Source": "https://www.rit.edu/~w-alumni/sliders/images/TigerHead.png",
                "License": ""
            },
        ],
        sources2: [
            {
                "Name": 'PHP Logo:',
                "Source": "https://www.iconfinder.com/icons/282805/php_icon",
                "License": ""
            },
            {
                "Name": 'Java Logo:',
                "Source": "https://icons8.com/icon/2571/java",
                "License": ""
            },
            {
                "Name": 'C# Logo:',
                "Source": "https://icons8.com/icon/45490/c-sharp-logo-2",
                "License": ""
            },
            {
                "Name": 'NodeJS icon made from Icon Fonts is licensed by CC BY 3.0',
                "Source": "https://www.onlinewebfonts.com/icon/437043",
                "License": ""
            },
            {
                "Name": 'Python Logo:',
                "Source": "https://icons8.com/icon/1909/python",
                "License": ""
            },
            {
                "Name": 'MySQL Logo:',
                "Source": "https://icons8.com/icon/39855/mysql-logo",
                "License": ""
            },
            {
                "Name": 'Postgres icon made from Icon Fonts is licensed by CC BY 3.0',
                "Source": "https://www.onlinewebfonts.com/icon/436917",
                "License": ""
            },
            {
                "Name": 'Microsoft Access Logo:',
                "Source": "https://visualpharm.com/free-icons/microsoft%20access-595b40b75ba036ed117d8164",
                "License": ""
            },
            {
                "Name": 'GitHub Logo:',
                "Source": "https://en.wikipedia.org/wiki/File:Octicons-mark-github.svg",
                "License": ""
            },
            {
                "Name": 'Subversion icon made from Icon Fonts is licensed by CC BY 3.0',
                "Source": "https://www.onlinewebfonts.com/icon/338696",
                "License": ""
            },
            {
                "Name": 'Photoshop Logo:',
                "Source": "https://www.iconfinder.com/icons/104816/photoshop_icon",
                "License": ""
            },
            {
                "Name": 'Phone Icon:',
                "Source": "https://www.flaticon.com/free-icon/phone-call_126509#term=phone&page=1&position=1",
                "License": ""
            },
        ]
    };

    render() {
        return (
            <React.Fragment>
                <CSSTransitionGroup
                    transitionName="initial"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div id="back-home">
                        <img src={HomeIcon} alt="home-icon"/>
                        <p><Link to="/" style={{fontWeight: 'bold'}}>HOME</Link></p>
                    </div>
                    <h1 id="credits-header">SVG Sources</h1>
                    <p id="credits-subhead">Icons/Logos were changed to black or white if not already</p>
                    <div id="credits">
                        <div id="left-source-list">
                            {this.state.sources1.map((source) => {
                                return (
                                    <div className="source-info">
                                        <p className="source-name">{source.Name}</p>
                                        <a href={source.Source}>Source</a>
                                        {source.License !== "" &&
                                            <a href={source.License}>License</a>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <div id="right-source-list">
                            {this.state.sources2.map((source) => {
                                return (
                                    <div className="source-info">
                                        <p className="source-name">{source.Name}</p>
                                        <a href={source.Source}>Source</a>
                                        {source.License !== "" &&
                                        <a href={source.License}>License</a>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </CSSTransitionGroup>
            </React.Fragment>
        )
    }
}

export default Credits;