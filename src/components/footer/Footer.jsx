import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          I developed this web app using React as the primary framework, and I
          integrated several essential libraries and tools to enhance its
          functionality. These include Redux Toolkit for state management, React
          Redux for seamless integration with Redux, Axios for making HTTP
          requests, React Player for seamless media playback, Dayjs for handling
          date and time formatting, React Router DOM for navigation, React Icons
          for a variety of icons, React Circular Progressbar for visually
          appealing progress indicators, React Infinite Scroll for endless
          scrolling capabilities, and React Lazy Load Image to optimize image
          loading and overall performance. These libraries and tools
          collectively contribute to the app's feature-rich and smooth user
          experience.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
