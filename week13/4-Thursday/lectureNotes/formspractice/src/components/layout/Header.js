import React from 'react'
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Deep State</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link active" to="/forms">Forms</Link>
                        <Link className="nav-item nav-link active" to="/formshooks">Forms-Hooks</Link>
                        <Link className="nav-item nav-link active" to="/lifting_state">Lifting State</Link>
                        <Link className="nav-item nav-link active" to="/project_management">Project Management</Link>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
