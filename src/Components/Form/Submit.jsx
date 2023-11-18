import styles from './Submit.module.css'

import PropTypes from 'prop-types'

export const Submit = ({ text }) => {
  return (
    <div>
        <button className={styles.btn}>
        {text}
        </button>
    </div>
  )
}

Submit.propTypes = {
        text: PropTypes.string
}
