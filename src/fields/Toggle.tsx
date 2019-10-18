import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import PropTypes from 'prop-types'

const Toggle = ({
  className = '',
  toggleColor,
  toggleOnColor,
  fieldId,
  defaultValue = false,
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  const toggleStyle = {
    '--fresh-toggle-on-color': toggleOnColor,
    '--fresh-toggle-color': toggleColor,
  } as React.CSSProperties
  return (
    <div className={`${className} fresh-switch`}>
      <input
        checked={fieldState || ''}
        type="checkbox"
        id={`fresh-${fieldId}`}
        className="fresh-input-toggle"
        onChange={() => {}}
      />
      <span
        style={toggleStyle}
        className={`fresh-slider ${fieldState && `on`}`}
        onClick={() => update({ id: fieldId, value: !fieldState })}
      />
    </div>
  )
}

Toggle.propTypes = {
  toggleColor: PropTypes.string,
  toggleOnColor: PropTypes.string,
}

Toggle.defaultProps = {
  toggleColor: '#ccc',
  toggleOnColor: '#2196f3',
}

export default Toggle
