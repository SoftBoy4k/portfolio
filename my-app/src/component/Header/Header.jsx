import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
    const [flag, setFlag] = useState(false)
    console.log(flag)
    return (
        <>
            <header className="header">
                <Link to='/'>
                    <img className="header-logo" src="/img/logo-removebg-preview.png"/>
                </Link>
                <img className='header-menu' src="/img/menu.png" onClick={() => {setFlag(!flag)}}/>
                <div className={ flag ? "header-content" : "header-content hidden"}>
                    <Link className="header-content_text" to="/about">About</Link>
                    <Link className="header-content_text" to="/projects">Projects</Link>
                    <Link className="header-content_text" to="/skills">Skills</Link>
                    <Link className="header-btn" to="/contact">Contact</Link>
                </div>
            </header>
        </>
    )
}