import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaFile} from "react-icons/fa";
import Pdf from "./resume/JoshHerreraProgrammerResume.pdf";

const Contact = ({ contactEmail, contactSection, socialLinks }) => {
    return (
        <div className="contact_container">
            <h1>Get in Touch</h1>
            <p>{contactSection}</p>
            <br></br>
            <a className="email_link"  href={`mailto:${contactEmail}`}>
                {contactEmail}
            </a>
            <div className="social_links">
                <ul>
                    <li>
                        <a href={`mailto:${contactEmail}`} target="_blank" rel="noreferrer">
                            <FaEnvelope></FaEnvelope>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[0].url} target="_blank" rel="noreferrer">
                            <FaLinkedin></FaLinkedin>                          
                        </a>               
                    </li>
                    <li>
                        <a href={socialLinks[1].url} target="_blank" rel="noreferrer">
                            <FaGithub></FaGithub>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[2].url} target="_blank" rel="noreferrer">
                            <FaTwitter></FaTwitter>
                        </a>
                    </li>
                    <li>
                        <a href={Pdf} target="_blank" rel="noreferrer">
                            <FaFile></FaFile>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact