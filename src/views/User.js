import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>User</h1>
            <Link className='link' to="contact">Contact</Link>
            <Link className='link' to="1">1</Link>
            <Link className='link' to="2">2</Link>
            <button onClick={() => navigate("dynamic-route")}>dynamic route</button>
            <hr/>
            
            <Outlet />
            <hr/>
            
        </div>
    )
}

export default User