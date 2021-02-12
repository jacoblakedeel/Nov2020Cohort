import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap';
import { v4 as uuidv1 } from 'uuid';

const AddProject = (props) => {

    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addProject({
            id: uuidv1(),
            title: title,
            category: category
        })
    }




    return (
        <>

        <div className="row">
            <div className="col-9">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            placeholder="Enter Project" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col=3">
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Choose Project Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>setCategory('Front-End')}>Front-End</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setCategory('Back-End')}>Back-End</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
            
        </>
    )
}

export default AddProject;
