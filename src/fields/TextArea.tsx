import React from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'

export const TextArea = ({
  required,
  defaultValue = '',
  fieldId,
  children,
  placeholder,
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <textarea
      id={`fresh-${fieldId}`}
      placeholder={placeholder}
      value={fieldState || ''}
      required={required}
      className="fresh-input fresh-input-textarea"
      onChange={e => update({ id: fieldId, value: e.target.value })}
    />
  )
}

TextArea.propTypes = {
  required: PropTypes.bool,
  options: PropTypes.array.isRequired,
  fieldId: PropTypes.string.isRequired,
}

TextArea.defaultProps = {
  required: false,
}

export default TextArea
