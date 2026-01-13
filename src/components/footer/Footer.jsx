import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Abdallah Ashraf
      </a>
      <ul className="parmalinks flex_center">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials flex_center">
        <a href="https://www.facebook.com/abdalla.ashraf.1829/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank">
          <CiTwitter />
        </a>
        <a href="https://github.com/abdallah-shraf" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; <a href="#">Abdallah Ashraf</a>. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
export default Footer;
