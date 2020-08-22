import React, { useEffect } from 'react'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Select = ({
  options,
  fieldId,
  formId,
  className = '',
}: FieldInterface) => {
  const { data, setField, registerField, defaultValues } = useForm()
  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? options[0]
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

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
