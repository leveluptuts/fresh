import React from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

const Select = ({ options, children, fieldId, defaultValue = 0, ...rest }) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <select
      id={`fresh-${fieldId}`}
      className="fresh-input fresh-input-select"
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
  children: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
}

Select.defaultProps = {
  children: '',
}

export default Select
