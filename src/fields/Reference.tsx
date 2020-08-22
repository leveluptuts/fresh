import React, { useState, useEffect } from 'react'
import { useForm } from '../state/formState'
import { FieldInterface } from './types'

const Reference = ({
  options,
  fieldId,
  keyProperty = 'id',
  displayProperty,
  placeholder = '',
  className = '',
  formId,
}: FieldInterface) => {
  const { data, setField, isReady, defaultValues, registerField } = useForm()
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? ''
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

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
