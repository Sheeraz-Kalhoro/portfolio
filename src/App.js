import './App.css';
import React from 'react';
import Education from './components/Education'
import Skills from './components/Skills';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import coderImage from './coderimage.jpg'
import {education, skills}from './data'

function App() {
  const educationData =education.map(edu =>{
    return <Education 
      degree={edu.degree}
      institute={edu.institute}
      year= {edu.Year}
      />
  })
  const skillData = skills.map(skill =>{
    return <Skills
                  soft={skill.programs}
                  expert={skill.experience}
    />
  })

  return (
    <div className="App">
     <Header />
     <Main 
     coderImage={coderImage}
     education={educationData}
     skills={skillData}/>
      <Footer />
    </div>
  );
}

export default App;
