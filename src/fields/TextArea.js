import React, { useContext } from 'react'
import { FormContext } from '../state/State'

export const TextArea = ({ defaultValue = [], children }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <textarea
      value={formState[children] || ''}
      defaultValue={defaultValue}
      onChange={e => update({ id: children, value: e.target.value })}
    />
  )
}

export default TextArea
