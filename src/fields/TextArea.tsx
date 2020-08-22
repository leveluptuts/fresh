import React from 'react'
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
  defaultValue?: string | boolean | number | [] | RefValue | {}
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
  defaultValue = '',
}) => {
  const { data, setField, isReady } = useForm()

  if (!isReady) return null
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
