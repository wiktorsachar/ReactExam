import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (<nav class="navbar">
<div class="container">
    <ul class="nav">
        <li><NavLink to="/mainpage">Main</NavLink></li>
        <li><NavLink to="/catalog">Catalog</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </ul>
</div>
</nav>)

export default Navbar;