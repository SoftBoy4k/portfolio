import './Footer.css'

export const Footer = () => {
    return(
        <>
            <div id="footer" className="footer">
                <p className="footer-header">Contacts:</p>
                <div className="footer-contacts">
                    <a href='https://github.com/SoftBoy4k'><img id="contact-github" src="/img/github.png" /></a>
                    <a href="https://vk.com/softboy4k"><img id="contact-vk" src="img/vkontakte.png" /></a>
                    <a href="https://www.linkedin.com/in/vladislav-pimoshenko-228b31214/"><img id="contact-linkedin" src="img/linkedin.png" /></a>
                </div>
            </div>
        </>
    );
}