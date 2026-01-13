import React from 'react'
import about_me from '../../assets/about_me.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_contianer">
        <div className="about_me">
          <div className="about_me_image">
            <img src={about_me} alt="About Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clints</h5>
              <small>200+ worldwide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic, illum, laboriosam pariatur ad tempora reiciendis numquam nemo, eum perspiciatis quaerat eos! Vero alias quisquam officiis, voluptatibus culpa voluptatum, nihil at dolores, ipsa quis mollitia. Asperiores, quam error saepe impedit ipsam voluptatum ab doloremque. Porro aliquam in alias ullam? Quia sapiente sequi magnam atque ex nihil, fugiat reprehenderit. Ullam suscipit doloribus voluptatem molestiae fugiat eius tempore? Repudiandae, voluptates. Nostrum aspernatur veniam suscipit pariatur dolor quae quis possimus ipsam mollitia similique, fugit nesciunt ratione est nulla libero quam iure consequuntur harum at! Quam ratione minima debitis fugiat aliquam obcaecati, quo nulla.</p>
          <a href="#contact" className="btn ">Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About;