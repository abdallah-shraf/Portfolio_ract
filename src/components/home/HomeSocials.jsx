import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function HomeSocials() {
    return (
      <div className="home_social">
        <a href="https://www.facebook.com/abdalla.ashraf.1829/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://github.com/abdallah-shraf/" target="_blank">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/abdallah-ashraf494" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    );
}
export default HomeSocials;