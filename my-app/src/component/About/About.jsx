import './About.css'

export const About = () => {
    return(
        <>
            <div id="about" className="about">
                <h2 className="about-header">About me</h2>
                <div className="about-content">        
                    <div className="about-text">
                        <p>I am a Front-End developer from Belarus. I am fond of solving problems of varying complexity and focus, forcing the brain to work.</p>
                        <p>Well organized problem solver, independent worker with great attention to detail. Lover of anime, outdoor activities, TV series and fantasy.</p>
                        <p>I'm interested in the whole spectrum of front-end and programming in general.</p>
                    </div>
                    <img className="about-img" src="/img/passport-photo.png"/>
                </div>
            </div>
        </>
    )
}