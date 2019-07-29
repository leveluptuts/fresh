import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, children, ...rest }) => {
  return (
    <select id={`fresh-${children}`} {...rest}>
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
