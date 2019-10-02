import React from 'react'
import Markdown from 'markdown-to-jsx'
import useSpecialField from '../hooks/useSpecialField'

export const MarkdownField = ({
  required,
  defaultValue = '',
  children,
  fieldId,
  placeholder,
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <div className="fresh-markdown-wrapper">
      <textarea
        id={`fresh-${fieldId}`}
        placeholder={placeholder}
        value={fieldState || ''}
        required={required}
        className="fresh-input fresh-input-textarea"
        onChange={e => update({ id: fieldId, value: e.target.value })}
      />
      <div className="fresh-input fresh-input-markdown">
        <Markdown children={fieldState || ''} />
      </div>
    </div>
  )
}

export default MarkdownField
