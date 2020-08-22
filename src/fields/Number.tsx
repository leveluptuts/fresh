import React, { useEffect } from 'react'
import { useForm } from '../state/formState'
import { FieldInterface } from './types'

const NumberField = ({
  fieldId,
  placeholder,
  required,
  formId,
  className,
}: FieldInterface) => {
  const { data, setField, defaultValues, registerField } = useForm()
  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? ''
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

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
