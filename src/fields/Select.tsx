import React, { useEffect } from 'react'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Select = ({
  options,
  fieldId,
  formId,
  displayProperty = '',
  valueProperty = '',
  className = '',
}: FieldInterface) => {
  const { data, setField, registerField, defaultValues } = useForm()

  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId]
      ? defaultValues?.[formId]?.[fieldId]?.[valueProperty] ||
        defaultValues?.[formId]?.[fieldId]
      : options[0]
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
      {options.map((option, i) => (
        <option
          value={option?.[valueProperty] || option}
          key={`fresh-${fieldId}-${formId}-${i}`}
          className="fresh-option"
        >
          {option?.[displayProperty] || option}
        </option>
      ))}
    </select>
  )
}

export default Select
