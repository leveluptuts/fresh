import React, { useEffect } from 'react'
import { useForm } from '../state/formState'

interface RefValue {
  id: string
  text: string
}

type Props = {
  required?: boolean
  children: string
  type?: string
  fieldId?: string
  name?: string
  label?: boolean
  error?: string
  placeholder?: string
  options: any
  className?: string
  tooltip?: string
  strength?: boolean
  displayProperty?: string
  formId: string
}

export const TextArea: React.FC<Props> = ({
  className,
  fieldId,
  formId,
  placeholder,
}) => {
  const { data, setField, registerField, defaultValues } = useForm()

  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? ''
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

  return (
    <textarea
      id={`fresh-${fieldId}-${formId}`}
      placeholder={placeholder}
      value={data[formId][fieldId]}
      className={`fresh-input fresh-input-textarea ${className}`}
      onChange={e => setField(fieldId, e.target.value, formId)}
    />
  )
}

export default TextArea
