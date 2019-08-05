import React from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

const Select = ({ options, children, fieldId, defaultValue = 0, key, ...rest }) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <select
      id={`fresh-${fieldId}`}
      onChange={(e) => update({ id: fieldId, value: e.target.value })}
      value={fieldState}
      {...rest}
    >
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.string
}

Select.defaultProps = {
  children: ''
}

export default Select
