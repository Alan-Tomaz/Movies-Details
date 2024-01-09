import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <div id='navbar'>
            <h2>
                <Link to="/"><BiCameraMovie />Movies Details</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search a movie' onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit"><BiSearchAlt /></button>
            </form>
        </div>
    )
}

export default Navbar
