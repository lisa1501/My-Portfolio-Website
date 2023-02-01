import React from 'react';
import { BsTwitter, BsLinkedin,BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';



const SocialMedia = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }
    return (
        <div className="app__social">
            <div>
                <BsLinkedin onClick={onClickUrl('https://www.linkedin.com/in/lisa-s-a155a5202/')}/>
            </div>
            <div>
                <BsGithub onClick={onClickUrl('https://github.com/lisa1501')}/>
            </div>
            <div>
                <BsTwitter />
            </div>
            <div>
                <FaFacebookF />
            </div>
            
        </div>
    )
}

export default SocialMedia
