import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options }) => {
  return (
    <select>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired
}

export default Select
