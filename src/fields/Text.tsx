import React, { useEffect } from 'react'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Text = ({
  className,
  fieldId,
  placeholder,
  required,
  type,
  formId,
}: FieldInterface) => {
  const { data, setField, registerField, defaultValues } = useForm()
  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? ''
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

  return (
    <input
      required={required}
      className={`fresh-input fresh-input-${type} ${className}`}
      placeholder={placeholder}
      id={`fresh-${fieldId}-${formId}`}
      type={type}
      value={data[formId][fieldId]}
      onChange={e => setField(fieldId, e.target.value, formId)}
    />
  )
}

export default Text
