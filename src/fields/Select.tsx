import React from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

const Select = ({ options, className, fieldId, defaultValue = 0 }) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <select
      id={`fresh-${fieldId}`}
      className={`fresh-input fresh-input-select ${className}`}
      onChange={e => update({ id: fieldId, value: e.target.value })}
      value={fieldState}
    >
      {options.map(option => (
        <option value={option} key={option} className="fresh-option">
          {option}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  fieldId: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Select.defaultProps = {
  className: '',
}

export default Select
