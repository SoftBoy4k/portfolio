import './Intro.css'

export const Intro = () => {
    return(
        <>
            <div className="intro">
                <p className="intro-welcome">Hi, my name is</p>
                <p className="intro-aboutMe intro-name">Vladislav Pimoshenko</p>
                <p className="intro-aboutMe intro-whoAmI">I create solutions from coding.</p>
                <p className="intro-description">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences for both web and mobile platforms. Currently, I'm focused on building Continous Intergration Continuos Deployment(CICD) solutions for organizations.</p>
                <a className="intro-btn" href="#">Read my Book</a>
            </div>
        </>
    );
}