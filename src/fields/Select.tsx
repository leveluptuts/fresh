import React from 'react'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Select = ({
  options,
  fieldId,
  formId,
  defaultValue = 0,
  className = '',
}: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  // If the form is not registered or there is not data object
  if (!isReady) return null

  return (
    <select
      id={`fresh-${fieldId}-${formId}`}
      className={`fresh-input fresh-input-select ${className}`}
      onChange={e => setField(fieldId, e.target.value, formId)}
      value={data[formId][fieldId]}
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

// TODO have default option as initial value
