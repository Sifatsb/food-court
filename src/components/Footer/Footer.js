import React from 'react';
import './Footer.css'
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import { SiLinkedin, SiTwitter } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className='footer-content'>
                <p>Made by Noob © 2021 </p>
                </div>

                <div className="icons">
                    <a href="https://www.facebook.com/sifatsb906/" target="_blank"  ><TiSocialFacebookCircular size="38px" color="red"/></a>
                    <a href="https://www.instagram.com/_.sifat._sb/" target="_blank"><AiFillInstagram size="35px" color="red"/></a>
                    <a href="https://www.linkedin.com/in/sifat-hasan-240504169/" target="_blank"><SiLinkedin size="30px" color="red"/></a>
                    <a href="https://twitter.com/EmrulSifat" target="_blank"><SiTwitter size="35px" color="red"/></a>
                    <a href="https://github.com/Sifatsb" target="_blank"><VscGithub size="35px" color="red"/></a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;