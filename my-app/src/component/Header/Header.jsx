import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="header">
                <Link to='/'>
                    <img className="header-logo" src="/img/logo-removebg-preview.png"/>
                </Link>
                <div className="header-content">
                    <Link className="header-content_text" to="/about">About</Link>
                    <Link className="header-content_text" to="/projects">Projects</Link>
                    <Link className="header-content_text" to="/skills">Skills</Link>
                    <Link className="header-btn" to="/contact">Contact</Link>
                </div>
            </header>
        </>
    )
}