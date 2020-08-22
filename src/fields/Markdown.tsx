import React from 'react'
import Markdown from 'markdown-to-jsx'
import { useForm } from '../state/formState'

import { FieldInterface } from './types'

export const TextArea = ({
  defaultValue = '',
  fieldId,
  placeholder,
  formId,
}: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  if (!isReady) return null
  return (
    <div className="fresh-markdown-wrapper">
      <textarea
        id={`fresh-${fieldId}`}
        placeholder={placeholder}
        value={data[formId][fieldId]}
        className="fresh-input fresh-input-textarea"
        onChange={e => setField(fieldId, e.target.value, formId)}
      />
      <div className="fresh-input fresh-input-markdown">
        <Markdown children={data[formId][fieldId] || ''} />
      </div>
    </div>
  )
}

export default TextArea
