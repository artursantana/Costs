import { useEffect, useState } from "react"
import { Input } from "../Form/Input"
import { Select } from "../Form/Select"
import { Submit } from "../Form/Submit"

import styles from './ProjectForm.module.css'
import PropTypes from 'prop-types'

export const ProjectsForm = ({ btntext }) => {

  const [categories, setCategories] = useState([])

 useEffect(()=>{

  fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp)=>resp.json())
  .then((data)=>setCategories(data)).catch((error)=>console.log(error))

 }
 ,[])
 
  return (

    

    <form className={styles.form}>
        <Input type='text'text='Name :' placeholder='insert name of project' name='name' />

        <Input type='text'text='Budget :' placeholder='Budget name of project' name='name' />

        <Select name='category_id' text='select category' />
        
       
        <Submit text={btntext} options={categories} />
    </form>
  )
}

ProjectsForm.propTypes = {
  btntext: PropTypes.string
}
