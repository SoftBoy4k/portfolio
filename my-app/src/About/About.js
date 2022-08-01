import './About.css'

export const About = () => {
    return(
        <>
            <div class="about">
                <h2 class="about-header">About me</h2>
                <div class="about-content">        
                    <div class="about-text">
                        <p>Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                        <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                    </div>
                    <img class="about-img" src="/img/passport-photo.png"/>
                </div>
                <ul class="about-knowledge">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>HTML</li>
                </ul>
            </div>
        </>
    )
}