import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

const Reference = ({
  options,
  children,
  fieldId,
  displayProperty,
  defaultValue = {},
  placeholder,
  ...rest
}) => {
  const { update } = useSpecialField({ fieldId, defaultValue })
  const [inputValue, setInputValue] = useState('')
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
        className="fresh-input fresh-input-reference"
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
                key={option._id}
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

Reference.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  displayProperty: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Reference.defaultProps = {
  children: '',
  placeholder: '',
}

export default Reference
