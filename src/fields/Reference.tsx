import React, { useState } from 'react'
import { useForm } from '../state/formState'
import { FieldInterface } from './types'

const Reference = ({
  options,
  fieldId,
  keyProperty = 'id',
  displayProperty,
  defaultValue = '',
  placeholder = '',
  className = '',
  formId,
}: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // If the form is not registered or there is not data object
  if (!isReady) return null
  return (
    <>
      <input
        id={`fresh-${fieldId}-${formId}`}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        type="text"
        className={`fresh-input fresh-input-reference ${className}`}
      />
      {isFocused && (
        <div className="fresh-focused">
          {options
            .filter(option =>
              option[displayProperty]
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
            .map(option => (
              <div
                key={option[keyProperty]}
                style={{ padding: '0.75em' }}
                onMouseDown={() => {
                  setField(fieldId, option, formId)
                  setInputValue(option[displayProperty])
                }}
              >
                {option[displayProperty]}
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default Reference
