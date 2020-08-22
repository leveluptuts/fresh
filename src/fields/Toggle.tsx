import React, { useEffect } from 'react'
import { FieldInterface } from './types'
import { useForm } from '../state/formState'

const Toggle = ({ fieldId, className = '', formId }: FieldInterface) => {
  const { data, setField, defaultValues, registerField } = useForm()
  useEffect(() => {
    const defaultValue = defaultValues?.[formId]?.[fieldId] ?? false
    registerField(fieldId, defaultValue, formId)
  }, [])
  if (!(fieldId in data[formId])) return null

  return (
    <div className={`${className} fresh-switch`}>
      <input
        checked={data[formId][fieldId] || false}
        type="checkbox"
        id={`fresh-${fieldId}`}
        className="fresh-input-toggle"
        onChange={_ => setField(fieldId, !data[formId][fieldId], formId)}
      />
      <span
        className={`fresh-slider ${data[formId][fieldId] ? `on` : ''}`}
        onChange={_ => setField(fieldId, !data[formId][fieldId], formId)}
      />
    </div>
  )
}

export default Toggle
