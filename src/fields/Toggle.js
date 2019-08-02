import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { FormContext } from '../state/State'
import style from './toggle.css'

const Toggle = ({ on, onClick, enabled, className, children }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <div className={style.switch}>
      <input checked={formState[children]} type='checkbox' />
      <span
        className={style.slider}
        onClick={e => update({ id: children, value: !formState[children] })}
      />
    </div>
  )
}

Toggle.propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  className: PropTypes.string
}

Toggle.defaultProps = {
  className: ''
}

export default Toggle
