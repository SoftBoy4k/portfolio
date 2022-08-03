import './Header.css'

export const Header = () => {
    return (
        <>
            <header className="header">
                <img className="header-logo" src="/img/logo-removebg-preview.png"/>
                <div className="header-content">
                    <a id="header-about" className="header-content_text" href="#">About</a>
                    <a id="header-experience" className="header-content_text" href="#">Experience</a>
                    <a id="header-work" className="header-content_text" href="#">Work</a>
                    <a id="header-contact" className="header-content_text" href="#">Contact</a>
                    <a id="header-btnx" className="header-btn" href="#">Resume</a>
                </div>
            </header>
        </>
    )
}