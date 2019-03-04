import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    state = {
        projects: [
            {
                "projectID": 1,
                "projectName": 'Font Search Database',
                "description": 'Group project that used Google Font API to create an application\n' +
                    'allowing users to search for fonts, comment on them, and\n' +
                    'view popularity trends.',
                "role": 'Back End',
                "tools": [
                            {
                                "toolID": 1,
                                "toolItem": 'HTML'
                            },
                            {
                                "toolID": 2,
                                "toolItem": 'CSS'
                            },
                            {
                                "toolID": 3,
                                "toolItem":'JQuery'
                            },
                            {
                                "toolID": 4,
                                "toolItem": 'Bootstrap'
                            },
                            {
                                "toolID": 5,
                                "toolItem":'Node JS'
                            },
                            {
                                "toolID": 6,
                                "toolItem": 'Postgres'
                            },
                            {
                                "toolID": 7,
                                "toolItem": 'GitHub'
                            }
                        ]
            },
            {
                "projectID": 2,
                "projectName": 'RAIHN Scheduler Application',
                "description": 'Group project that used a LAMP stack to build a scheduler application\n' +
                    'for a local company.',
                "role": 'Front End/Back End',
                "tools": [
                            {
                                "toolID": 1,
                                "toolItem": 'HTML'
                            },
                            {
                                "toolID": 2,
                                "toolItem": 'CSS'
                            },
                            {
                                "toolID": 3,
                                "toolItem":'JQuery'
                            },
                            {
                                "toolID": 4,
                                "toolItem": 'Bootstrap'
                            },
                            {
                                "toolID": 5,
                                "toolItem":'PHP'
                            },
                            {
                                "toolID": 6,
                                "toolItem": 'MySQL'
                            },
                            {
                                "toolID": 7,
                                "toolItem": 'GitHub'
                            }
                        ]
            },
            {
                "projectID": 3,
                "projectName": 'Java Board Game',
                "description": 'Group project that involved building a Java based board game with ' +
                    'integrated chat and game logic.',
                "role": 'Back End',
                "tools": [
                            {
                                "toolID": 1,
                                "toolItem": 'Java'
                            },
                            {
                                "toolID": 2,
                                "toolItem": 'Networking'
                            }
                        ]
            },
        ]
    };

    render() {
        return (
            <div className="section" id="projects">
                <div className="section-title">
                    <h1>P R O J E C T S</h1>
                </div>
                {this.state.projects.map((project) => (
                    <ProjectItem
                        key={project.projectID}
                        projectName={project.projectName}
                        description={project.description}
                        role={project.role}
                        tools={project.tools}
                    />
                ))}

            </div>
        )
    }
}

export default Projects;