import React from 'react'
import useSpecialField from '../hooks/useSpecialField'

export const TextArea = ({
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
      className="fresh-input fresh-input-textarea"
      onChange={e => update({ id: fieldId, value: e.target.value })}
    />
  )
}

export default TextArea
