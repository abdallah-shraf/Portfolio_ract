import React from 'react';
import './projects.css';
import faq from './imges/FAQsProject.png'
import calculatorApp from './imges/calculator-app.png';
import tipCalculatorApp from './imges/tip-calculator-app.png';
import expensesChartComponent from './imges/expenses-chart-component.png';
import insureLandingPage from './imges/insure-landing-page.png';
import fyloLandingPage from './imges/fylo-landing-page.png';

const Projects = [
    {
        id: 1,
        image: faq,
        title: 'Faq Accordion',
        github: 'https://github.com/abdallah-shraf/faq-accordion',
        demo: 'https://abdallah-shraf.github.io/faq-accordion/'
    },{
        id: 2,
        image: calculatorApp,
        title: 'Calculator App',
        github: 'https://github.com/abdallah-shraf/calculator-app',
        demo: 'https://abdallah-shraf.github.io/calculator-app/'
    },
    {
        id: 3,
        image: tipCalculatorApp,
        title: 'Tip Calculator App',
        github: 'https://github.com/abdallah-shraf/tip-calculator-app',
        demo: 'https://abdallah-shraf.github.io/tip-calculator-app/'
    },
    {
        id: 4,
        image:expensesChartComponent ,
        title: 'Expenses Chart Component',
        github: 'https://github.com/abdallah-shraf/expenses-chart-component',
        demo: 'https://abdallah-shraf.github.io/expenses-chart-component/'
    },
    {
        id: 5,
        image:insureLandingPage ,
        title: 'Insure Landing Page',
        github: 'https://github.com/abdallah-shraf/insure-landing-page',
        demo: 'https://abdallah-shraf.github.io/insure-landing-page/'
    },
    {
        id: 6,
        image:fyloLandingPage ,
        title: 'Fylo Landing Page',
        github: 'https://github.com/abdallah-shraf/Fylo-landing-page-with-dark-theme-and-features-grid',
        demo: 'https://abdallah-shraf.github.io/Fylo-landing-page-with-dark-theme-and-features-grid/'
    },
];

function Portfolio() { 
    return (
      <section className="projects" id="portfolio">
        <div className="top_section">
          <h5>My Recebt Work</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="container projects_container flex_center">
          {Projects.map(({ id, image, title, github, demo }) => (
            <div key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_btns">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );

}
export default Portfolio;