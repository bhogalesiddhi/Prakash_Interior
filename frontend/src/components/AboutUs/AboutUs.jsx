import React from 'react'
import './AboutUs.css'
import StatsSection from '../StatsSection/StatsSection'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'

const AboutUs = () => {
  return (
    <>
    <div className='portfolio-container'>
        <div className='image-container'>
            <img src='/images/buisness1.jpg' alt='Profile'></img>
        </div>
        <div className='text-container'>
        <h1>M. Sc. Stadt- und Regionalplanung</h1>
        <h2>Maria Lorielle Dubois</h2>
        <p>
          Schreib hier kurz und knapp etwas zu deiner Person, vielleicht schon mit der einen oder anderen Info, die für deine Zielgruppe relevant sein könnte. Übertreib es nicht, aber sei auch nicht zu bescheiden. Hier geht's schließlich darum, dich und deine Arbeiten zu präsentieren.
        </p>
        <p>
          Schreib hier etwas über deine besonderen Stärken innerhalb deiner Fachdisziplin. Welche Arbeit liegt dir besonders gut? Was war / ist Schwerpunkt deines Studiums? Wofür stehst du als Architekt*in / Stadt- / Landschaftsplaner*in? Welche Motivation steckt hinter deiner Arbeit und wie stellst du dir die Zukunft deiner Fachdisziplin vor? Sei kreativ!
        </p>
        <div className="button-container">
          <button className="cv-button">Lebenslauf ansehen</button>
          <button className="contact-button">Kontaktieren</button>
        </div>
        </div>
    </div>
    <StatsSection/>
    <FeaturedProjects/>
    </>
  )
}

export default AboutUs