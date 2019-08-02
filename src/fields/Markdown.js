import React, { useContext } from 'react'
import Markdown from 'markdown-to-jsx'

import { FormContext } from '../state/State'

export const TextArea = ({ defaultValue = [], children }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <div style={{ display: 'flex' }}>
      <textarea
        style={{ width: '50%' }}
        value={formState[children] || ''}
        defaultValue={defaultValue}
        onChange={e => update({ id: children, value: e.target.value })}
      />
      <Markdown style={{ width: '50%' }} children={formState[children] || ''} />
    </div>
  )
}

export default TextArea
