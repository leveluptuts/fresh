import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import { FieldInterface } from './types'

const NumberField = ({
  fieldId,
  defaultValue = null,
  placeholder,
  required,
  className,
}: FieldInterface) => {
  const { fieldState, update } = useSpecialField({
    fieldId,
    defaultValue,
  })
  return (
    <>
      <input
        required={required}
        className={`fresh-input fresh-input-number ${className}`}
        placeholder={placeholder}
        id={`fresh-${fieldId}`}
        type="number"
        value={fieldState || ''}
        onChange={e => {
          const value = e.target.value ? parseInt(e.target.value) : null
          update({ id: fieldId, value })
        }}
      />
    </>
  )
}

export default NumberField
