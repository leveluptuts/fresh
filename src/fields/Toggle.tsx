import PropTypes from 'prop-types'
import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
// import style from './toggle.css'

const Toggle = ({
  on,
  onClick,
  enabled,
  className,
  children,
  fieldId,
  defaultValue = false,
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <div className={`fresh-switch`}>
      <input
        checked={fieldState}
        type="checkbox"
        id={`fresh-${fieldId}`}
        className="fresh-input fresh-input-checkbox fresh-input-toggle"
      />
      <span
        className={`fresh-slider`}
        onClick={() => update({ id: fieldId, value: !fieldState })}
      />
    </div>
  )
}

Toggle.propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  className: PropTypes.string,
}

Toggle.defaultProps = {
  className: '',
}

export default Toggle
