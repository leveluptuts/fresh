import PropTypes from 'prop-types'
import React, { useState } from 'react'
import style from './toggle.css'

const propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  className: PropTypes.string
}

const defaultProps = {
  className: ''
}

const Toggle = ({ on, onClick, enabled, className }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className={style.switch}>
      <input checked={checked} type='checkbox' />
      <span className={style.slider} onClick={e => setChecked(!checked)} />
    </div>
  )
}

Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps

export default Toggle
