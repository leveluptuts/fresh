import React from 'react'
import useSpecialField from '../hooks/useSpecialField'

interface PasswordInterface {
  required: boolean
  strength: boolean
  type: string
  fieldId: string
  children: string
  label: string
  error?: string
  placeholder: string
  options: string[] | object[]
  className: string
  defaultValue: string | null
}

const NumberField = ({
  fieldId,
  defaultValue = null,
  placeholder,
  required,
  className,
}: PasswordInterface) => {
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
