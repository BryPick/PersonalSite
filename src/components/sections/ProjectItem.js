import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <div className="section-content project-item">
                <div className="text-content">
                    <p className="section-content-title">{this.props.projectName}</p>
                    <p className="section-content-body">{this.props.description}</p>
                    <p className="section-content-body">Role: {this.props.role}</p>
                    <p className="section-content-body"><span style={lightBlueStrong}>Used:</span>
                        {this.props.tools.map((tool) => (
                            <React.Fragment key={tool.toolID}>
                                {" "+tool.toolItem+","}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        )
    }
}

const lightBlueStrong = {
    color: '#01baef',
    fontWeight: 'bold'
};

export default ProjectItem;