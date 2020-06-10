import React, { useState } from 'react'
import useSpecialField from '../hooks/useSpecialField'
import { FieldInterface } from './types'

const Reference = ({
  options,
  fieldId,
  keyProperty = 'id',
  displayProperty,
  defaultValue = '',
  placeholder = '',
  className = '',
}: FieldInterface) => {
  const { update, fieldState } = useSpecialField({ fieldId, defaultValue })
  const [inputValue, setInputValue] = useState('YO')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <input
        id={`fresh-${fieldId}`}
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
                  update({ id: fieldId, value: option })
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
