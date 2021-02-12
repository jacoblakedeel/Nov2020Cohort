import React, {useState, useEffect} from 'react';
import AddProject from './AddProject';
import Project from './Project';
import { v4 as uuidv1 } from 'uuid';

const ProjectManagement = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        setProjects(
            [
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "Javascript"
                },
                {
                    id: uuidv1(),
                    category: "Back-End",
                    title: "Node"
                },
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "React"
                }
            ]
        )
    }, [])

    const handleAddProject = (newProject) => {
        setProjects([newProject, ...projects])
    }

    const handleDeleteProject = (id) => {
        let oldProjects = [...projects];

        let filteredProjects = oldProjects.filter(project=>{
            return id !== project.id
        })

        setProjects(filteredProjects);
    }
    
    



    return (
        <>
            <div className="row mt-5">
                <div className="col-6 offset-3 text-center">
                    <h3>Project Management</h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Add a Project</h5>
                        <div className="card-body">
                            <AddProject addProject={(project)=>handleAddProject(project)}/>
                        </div>
                    </div>
                    {/* end of card */}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 offet-3 mt-4">
                        <Project onDelete={(id)=>handleDeleteProject(id)} projects={projects}/>
                </div>
            </div>
        </>
    )
}

export default ProjectManagement;
