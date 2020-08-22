import React from 'react'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Toggle = ({ fieldId, className = '', formId }: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  if (!isReady) return null
  return (
    <div className={`${className} fresh-switch`}>
      <input
        checked={data[formId][fieldId] || false}
        type="checkbox"
        id={`fresh-${fieldId}`}
        className="fresh-input-toggle"
        onChange={e => setField(fieldId, !data[formId][fieldId], formId)}
      />
      <span
        className={`fresh-slider ${data[formId][fieldId] ? `on` : ''}`}
        onChange={e => setField(fieldId, !data[formId][fieldId], formId)}
      />
    </div>
  )
}

export default Toggle
