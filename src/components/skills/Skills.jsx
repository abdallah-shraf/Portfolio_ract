import './skills.css';
import React from 'react'
import css from './images/CSS3_logo.png'
import html from './images/html.png'
import js from './images/js.png'
import react from './images/React-icon.png'
import php from './images/php.png'
import laravel from "./images/Laravel.png";
import sql from './images/sql.png'
import Figma from './images/figma.png'


const skillsData = [
    {
        id: 1,
        skill: 'css',
        icon: css,
        desc:'User Interface Design',
    },
    {
        id: 2,
        skill: 'Html',
        icon: html,
        desc:'User Interface Design',
    },
    {
        id: 3,
        skill: 'JavaScript',
        icon: js,
        desc:'Interactive Front End',
    },
    {
        id: 4,
        skill: 'React',
        icon: react,
        desc:'Front End Library',
    },
    {
        id: 5,
        skill: 'Php',
        icon: php,
        desc:'BackEnd Development',
    },
    {
        id: 6,
        skill: 'Laravel',
        icon: laravel,
        desc:'framework for web artisan',
    },
    {
        id: 7,
        skill: 'MySQL',
        icon: sql,
        desc:'Database Management',
    },
    {
        id: 8,
        skill: 'Figma',
        icon: Figma,
        desc:'Designing prototype',
    },


];

function Skills() {
    return (
      <section className="skills" id='skills'>
        <div className="top_section">
          <h5>What Skills I Have</h5>
          <h2>Me Expereience</h2>
        </div>
        <div className="container skills_container flex_center">
          {skillsData.map(({ id, skill, icon, desc }) => (
            <article key={id} className="card_skills flex_center">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <div className="content">
                <h4>{skill}</h4>
                <p className="text-light">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
}
export default Skills;