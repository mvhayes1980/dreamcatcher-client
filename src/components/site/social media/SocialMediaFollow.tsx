import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaFollow() {
    return (
        <div>
            <h4>Follow us on Social Media</h4>
                <a href="https://www.facebook.com/Dreamalish-113313620416693/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="3x" />Facebook
                </a>
                <br/>
                <a
                href="https://www.instagram.com/_dreamalish"
                className="instagram social"
                >
                <FontAwesomeIcon icon={faInstagram} size="3x" />  Instagram
                </a>
                <br/>
                <a
                href="https://www.linkedin.com/company/dreamalish/"
                className="linkedin social"
                >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />  LinkedIn
                </a>
                <br/>
                <a href="https://twitter.com/dreamalish"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="3x" />Twitter
                </a>
        </div>
    );
}