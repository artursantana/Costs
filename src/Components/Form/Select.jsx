import styles from './Select.module.css'

import PropTypes from 'prop-types'

export const Select = ({text,name, options}) => {
  return (


    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}>
            <option>Select a option</option>
            {options && options.map((option)=>(
                <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
  )
}

Select.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array
}