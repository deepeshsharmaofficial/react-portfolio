import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import NewsSection from "../sections/NewsSection";
import Education from "../sections/Education";
import Hero from "../sections/Hero";

import { hero, socialMedia, about, educations, skills, experiences, projects } from '../constants';

const HomePage = () => {
  return (
    <>
      <Hero hero={hero} socialMedia={socialMedia} />
      <About about={about} />
      <Education educations={educations} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Project projects={projects} />
      <NewsSection />
      <Contact />
    </>
  )
}

export default HomePage;