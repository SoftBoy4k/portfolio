import { Link } from 'react-router-dom';
import './Intro.css'

export const Intro = () => {
    return(
        <>
            <div className="intro">
                <p className="intro-welcome">Hi, my name is</p>
                <p className="intro-aboutMe intro-name">Vladislav Pimoshenko</p>
                <p className="intro-aboutMe intro-whoAmI">I create solutions from coding.</p>
                <p className="intro-description">I am a front-end developer specializing in web application development. At the moment I am focused on expanding my knowledge in this area. To create even more complex and advanced projects.</p>
                <Link className="intro-btn" to="/contact">Contact</Link>
            </div>
        </>
    );
}