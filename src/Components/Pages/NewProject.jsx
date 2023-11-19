import styles from './NewProject.module.css';
import { ProjectsForm } from '../Projects/ProjectsForm';

import { useNavigate } from 'react-router-dom';

export const NewProject = () => {
  const navigate = useNavigate();

  const createPost = (project) => {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Redirect to another page, e.g., the project details page
        navigate(`/projects/${data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.newproject_container}>
        <h1>Create Projects</h1>
        <p>Create your project to after add services</p>
        <ProjectsForm handleSubmit={createPost} btntext='Create Project' />
      </div>
    </>
  );
};
