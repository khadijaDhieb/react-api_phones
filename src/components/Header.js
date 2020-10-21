import React from 'react'
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Phones Store</h1>
            <Link style={linkStyle} to="/phones"> Home </Link>
            |
            <Link style={linkStyle} to="/phones/add"> Add a new Phone </Link>
                
      
            {/* | <Link style={linkStyle} to="/phones/edit">Edit</Link>
            | <Link style={linkStyle} to="/phones/delete">Delete</Link> */}
        </header>
    )
}




const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#ffd',
    textDecoration: 'none',

}