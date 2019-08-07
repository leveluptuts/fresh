import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

const Reference = ({
  options,
  children,
  fieldId,
  displayProperty,
  defaultValue = {},
  ...rest
}) => {
  const { update } = useSpecialField({ fieldId, defaultValue })
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <input
        id={`fresh-${fieldId}`}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        {...rest}
      />
      {isFocused && (
        <div style={{ position: 'absolute', background: 'white' }}>
          {options
            .filter(option =>
              option[displayProperty]
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
            .map(option => (
              <div
                key={option._id}
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
    </div>
  )
}

Reference.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  displayProperty: PropTypes.string.isRequired,
}

Reference.defaultProps = {
  children: '',
}

export default Reference
