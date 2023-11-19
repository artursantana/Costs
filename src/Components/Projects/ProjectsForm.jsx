import { useEffect, useState } from "react";
import { Input } from "../Form/Input";
import { Select } from "../Form/Select";
import { Submit } from "../Form/Submit";

import styles from './ProjectForm.module.css';
import PropTypes from 'prop-types';

export const ProjectsForm = ({ handleSubmit, btntext, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input type="text" text="Name :" placeholder="Insert name of project" name="projectName" handleOnChange={handleChange} />
      <Input type="text" text="Budget :" placeholder="Budget name of project" name="budget" handleOnChange={handleChange} />
      <Select name="category_id" text="Select category" options={categories} handleOnChange={handleChange} />
      <Submit text={btntext} />
    </form>
  );
};

ProjectsForm.propTypes = {
  btntext: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  projectData: PropTypes.object,
};
