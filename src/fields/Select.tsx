import React from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

const Select = ({
  required,
  options,
  children,
  fieldId,
  defaultValue,
  ...rest
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <select
      id={`fresh-${fieldId}`}
      className="fresh-input fresh-input-select"
      onChange={e => update({ id: fieldId, value: e.target.value })}
      value={fieldState}
      required={required}
      {...rest}
    >
      {!defaultValue && (
        <option value="" selected disabled hidden>
          Select an option
        </option>
      )}
      {options.map(option => (
        <option value={option} key={option} className="fresh-option">
          {option}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  required: PropTypes.bool,
  options: PropTypes.array.isRequired,
  children: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
}

Select.defaultProps = {
  required: false,
  children: '',
}

export default Select
