import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Experience extends Component {
    render() {
        return (
            <div className="section" id="experience">
                <div className="section-title">
                    <h1>E X P E R I E N C E</h1>
                </div>
                <div className="section-content">
                    <div className="company-name">
                        <MediaQuery query="(min-width: 1001px)">
                            <h1>Manufacturer Rep</h1>
                            <h1>Network LLC</h1>
                        </MediaQuery>
                    </div>
                    <div className="text-content">
                        <MediaQuery query="(min-width: 1001px)">
                            <p className="section-content-title">Manufacturer Rep Network <span style={floatRight}>Aug 2017 - Dec 2017</span></p>
                        </MediaQuery>
                        <MediaQuery query="(max-width: 1000px)">
                            <p className="section-content-title">Mfr. Rep Network <span style={floatRight}>Aug 2017 - Dec 2017</span></p>
                        </MediaQuery>
                        <p className="section-content-body">Front End/Back End Dev.</p>
                        <p className="section-content-body">Redeveloped existing website with back end and front end code.</p>
                        <p className="section-content-body"><span style={lightBlueStrong}>Used:</span> HTML, CSS, Javascript, jQuery, Bootstrap, PHP, and MySQL</p>
                    </div>
                </div>
                <div className="section-content">
                    <div className="company-name">
                        <MediaQuery query="(min-width: 1001px">
                            <h1>Liberty Mutual</h1>
                        </MediaQuery>
                    </div>
                    <div className="text-content">
                        <p className="section-content-title">Liberty Mutual <span style={floatRight}>Jun 2016 - Aug 2016</span></p>
                        <p className="section-content-body">IT Recovery Team</p>
                        <p className="section-content-body">Maintained application data. Updated code to link updated
                            files contained within team file share. Maintained and improved
                            Sharepoint utilities used by the team.</p>
                        <p className="section-content-body"><span style={lightBlueStrong}>Used:</span> HTML, CSS, Microsoft Access, Microsoft Office</p>
                    </div>
                </div>
            </div>
        )
    }
}

const lightBlueStrong = {
    color: '#01baef',
    fontWeight: 'bold'
};
const floatRight = {
    float: 'right',
    marginRight: '1%'
};

export default Experience;