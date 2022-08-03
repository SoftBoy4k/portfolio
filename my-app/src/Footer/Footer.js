import './Footer.css'

export const Footer = () => {
    return(
        <>
            <div className="footer">
                <p className="footer-header">Contacts:</p>
                <div className="footer-contacts">
                    <img id="contact-github" src="/img/github.png" />
                    <img id="contact-vk" src="img/vkontakte.png" />
                    <img id="contact-inst" src="img/instagram.png" />
                </div>
            </div>
        </>
    );
}