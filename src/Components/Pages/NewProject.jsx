import styles from './NewProject.module.css'
import { ProjectsForm } from '../Projects/ProjectsForm'

export const NewProject = () => {
  return (
    <>
      <div className={styles.newproject_container}>
        <h1>Create Projects</h1>
        <p>create your project to after add services</p>
        <ProjectsForm btntext='to create project' />
      </div>  
    </>
  )
}
