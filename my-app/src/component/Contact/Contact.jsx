import "./Contact.css"

export const Contact = () => {
    return(
        <div className="contacts">
            <h2 className="contacts-header">
                Contacts:
            </h2>
            <div className="contacts-content">
                <a href="https://www.linkedin.com/in/vladislav-pimoshenko-228b31214/">
                    <img src="/img/linkedin.png"/>
                    <p>LinkedIn</p>
                </a>
                    
                <a href="https://vk.com/softboy4k">
                    <img src="/img/vkontakte.png"/>
                    VKontakte
                </a>

                
                <a href="https://github.com/SoftBoy4k">
                    <img src="/img/github.png"/>
                    Github
                </a>
            </div>
        </div>     
    );
}