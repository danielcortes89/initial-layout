import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../navbar.css';

const Navbar = () => {
    return (
        <section>
            <div>The Navbar</div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </section>
    )
}

export default Navbar;