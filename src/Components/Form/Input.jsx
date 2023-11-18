import styles from './Input.module.css'

import PropTypes from 'prop-types'

export const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} placeholder={placeholder} id={name} onChange={handleOnChange}
        value={value} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  text: PropTypes.string
}
