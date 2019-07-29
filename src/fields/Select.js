import React, { useContext } from 'react'
import { FormContext } from '../state/State'
import PropTypes from 'prop-types'

const Select = ({ options, children, ...rest }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <select id={`fresh-${children}`} {...rest} onChange={(e) => update({ id: children, value: e.target.value })} value={formState[children]}>
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
