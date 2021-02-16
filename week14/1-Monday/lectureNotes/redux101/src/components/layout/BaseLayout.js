import React from 'react';
import {Link} from 'react-router-dom';

const BaseLayout = (props) => {
    return (
        <>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/count">View Count</Link> &nbsp;
            <Link to="/count_hooks">Count Hooks</Link> &nbsp;
            <Link to="/view_count_hooks">View Count Hooks</Link> &nbsp;
            <Link to="/forms">Forms</Link>
            <br /> <br />
            {props.children}
        </>
    )
}

export default BaseLayout;
