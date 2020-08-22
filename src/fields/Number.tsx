import React from 'react'
import { useForm } from '../state/formState'
import { FieldInterface } from './types'

const NumberField = ({
  fieldId,
  defaultValue = null,
  placeholder,
  required,
  formId,
  className,
}: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  if (!isReady) return null
  return (
    <input
      required={required}
      className={`fresh-input fresh-input-number ${className}`}
      placeholder={placeholder}
      id={`fresh-${fieldId}-${formId}`}
      type="number"
      value={data[formId][fieldId]}
      onChange={e => {
        const value = e.target.value ? parseInt(e.target.value) : null
        setField(fieldId, value, formId)
      }}
    />
  )
}

export default NumberField
