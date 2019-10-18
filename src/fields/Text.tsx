import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import { FieldInterface } from './types'

const Text = ({
  required,
  type,
  className,
  placeholder,
  fieldId,
  defaultValue,
}: FieldInterface) => {
  const { fieldState, update } = useSpecialField({
    fieldId,
    defaultValue,
  })
  return (
    <input
      required={required}
      className={`fresh-input fresh-input-${type} ${className}`}
      placeholder={placeholder}
      id={`fresh-${fieldId}`}
      type={type}
      value={fieldState || ''}
      onChange={e => {
        update({ id: fieldId, value: e.target.value })
      }}
    />
  )
}

export default Text
