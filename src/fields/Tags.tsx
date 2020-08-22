import React from 'react'
import TagsInput from 'react-tagsinput'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Tags = ({
  defaultValue = [],
  fieldId,
  className = '',
  formId,
}: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  // If the form is not registered or there is not data object
  if (!isReady) return null

  return (
    <TagsInput
      value={data[formId][fieldId] || []}
      onChange={value => setField(fieldId, value, formId)}
      className={`fresh-input-tags ${className}`}
      id={`fresh-${fieldId}-${formId}`}
      style={{
        marginTop: '1rem',
      }}
    />
  )
}

export default Tags
