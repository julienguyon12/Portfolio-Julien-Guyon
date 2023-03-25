import React from 'react';
import '../Style/ProjectDisplay.css';
import { useParams } from 'react-router-dom';
import { projectList } from '../data/DataProject';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <a href={project.url} target='_blank' rel='noreferrer'>
        <img src={project.image} alt='projet' />
      </a>
      <p>Skills: {project.skills}</p>
      <a href={project.urlGit} target='_blank' rel='noreferrer'>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
