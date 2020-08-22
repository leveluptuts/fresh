import React, { useEffect } from 'react'
import TagsInput from 'react-tagsinput'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Tags = ({ fieldId, className = '', formId }: FieldInterface) => {
  const { data, setField, defaultValues, registerField } = useForm()

  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? []
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

  return (
    <TagsInput
      value={data[formId][fieldId] || []}
      onChange={(value: string[]) => setField(fieldId, value, formId)}
      className={`fresh-input-tags ${className}`}
      id={`fresh-${fieldId}-${formId}`}
      style={{
        marginTop: '1rem',
      }}
    />
  )
}

export default Tags
