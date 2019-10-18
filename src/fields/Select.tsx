import React from 'react'
import useSpecialField from '../hooks/useSpecialField'

const Select = ({ options, fieldId, defaultValue = 0 }) => {
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

export default Select
