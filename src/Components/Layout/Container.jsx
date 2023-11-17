import PropTypes from 'prop-types'

import styles from './Container.module.css'

export const Container = ({children, customClass}) => {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>{children}</div>
  )
}

Container.propTypes = {
    children: PropTypes.any,
    customClass: PropTypes.any
}
