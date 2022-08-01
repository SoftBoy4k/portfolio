import './Header.css'

export const Header = () => {
    return (
        <>
            <header class="header">
                <img class="header-logo" src="/img/S (1) 1.png"/>
                <div class="header-content">
                    <a class="header-content_text" href="#">About</a>
                    <a class="header-content_text" href="#">Experience</a>
                    <a class="header-content_text" href="#">Work</a>
                    <a class="header-content_text" href="#">Contact</a>
                    <a class="header-btn" href="#">Resume</a>
                </div>
            </header>
        </>
    )
}