import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import { FieldInterface } from './types'

export const TextArea = ({
  defaultValue = '',
  fieldId,
  placeholder,
}: FieldInterface) => {
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
