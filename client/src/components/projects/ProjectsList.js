import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ProjectsList extends Component {
    render () {
        return (
            <div>
                {this.props.projects.map(project => {
                    return (
                        <div key={project.id}>
                            <ul>
                                <Link to={`/projects/${project.id}/messages`}><li key={project.id}>{project.name}</li></Link>

                            </ul>
                        </div>

                        
                    )
                })}
            </div>

        )
    }

}

export default ProjectsList