import React from 'react'
import useSpecialField from '../hooks/useSpecialField'

export const TextArea = ({ defaultValue = '', fieldId, children }) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <textarea
      value={fieldState || ''}
      onChange={e => update({ id: fieldId, value: e.target.value })}
    />
  )
}

export default TextArea
