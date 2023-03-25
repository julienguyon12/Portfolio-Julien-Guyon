import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../Style/Projects.css';
import { projectList } from '../data/DataProject';

function Projects() {
  return (
    <div className='projects'>
      <h1>Mes projets personnels</h1>
      <div className='projectList'>
        {projectList.map((item, idx) => {
          return (
            <ProjectItem
              key={item.id}
              id={idx}
              name={item.name}
              image={item.image}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
