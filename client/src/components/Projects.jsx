import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='py-12 px-9 'id='projects'>
      <h1 className='lobster-regular lg:text-[4rem] text-[2rem] text-center font-bold bg-clip-text  text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>My Work</h1>
  <div className='flex flex-wrap items-center justify-center gap-9 py-9 px-6'>
  <ProjectCard
  image="/Screenshot (8).png"
  title="RankComfort"
  description="This is a blog website."
  techStack={['Wordpress', 'CSS', 'HTML']}
  url="https://rankcomfort.com/"
/>
<ProjectCard
  image="/Screenshot (2).png"
  title="Hafsa Hijabs"
  description="An online hijabs shop website landing page."
  techStack={['NextJS', 'Tailwind CSS', 'Node.js']}
  url="https://example.com/project-url"
/>
<ProjectCard
  image="/img999.png"
  title="NewInovation"
  description="This is a blog website."
  techStack={['WordPress', 'CSS', 'HTML']}
  url="https://newinovation.com/"
/>
<ProjectCard
  image="/Screenshot2.png"
  title="Flavouro"
  description="This is a food delivery website."
  techStack={['React', 'Tailwind CSS', 'Node.js']}
  url="https://flavouro.netlify.app/"
/>
<ProjectCard
  image="/Screenshot (3).png"
  title="Mysha Techno"
  description="A tech blog."
  techStack={['HTML', 'CSS', 'JavaScript']}
  url="https://mysha-techno.blogspot.com/"
/>
  <ProjectCard
  image="/Screenshot (9).png"
  title="Nuqta-e-Fiqr"
  description="A non-profit organization website."
  techStack={['React', 'Tailwind CSS', ]}
  url="https://nuqta-e-fikar.netlify.app/"
/>

  </div>
      </div>
  )
}

export default Projects