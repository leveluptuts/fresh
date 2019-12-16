import React from 'react'
import { FieldInterface } from './types'
import useSpecialField from '../hooks/useSpecialField'

const Toggle = ({
  fieldId,
  defaultValue = false,
  className = '',
}: FieldInterface) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <div className={`${className} fresh-switch`}>
      <input
        checked={fieldState || false}
        type="checkbox"
        id={`fresh-${fieldId}`}
        className="fresh-input-toggle"
        onChange={() => {}}
      />
      <span
        className={`fresh-slider ${fieldState ? `on` : ''}`}
        onClick={() => update({ id: fieldId, value: !fieldState })}
      />
    </div>
  )
}

export default Toggle
