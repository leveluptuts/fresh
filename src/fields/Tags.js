import React, { useContext } from 'react'
import { FormContext } from '../state/State'
import TagsInput from 'react-tagsinput'

const Tags = ({ defaultValue = [], children }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <TagsInput value={formState[children] || []} defaultValue={defaultValue} onChange={value => update({ id: children, value })} />
  )
}

export default Tags
