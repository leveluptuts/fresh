import React, { useContext } from 'react'
import { FormContext } from '../state/State'
import TagsInput from 'react-tagsinput'
import styled from 'styled-components'

const Tags = ({ defaultValue = [], children }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <StyledTags value={formState[children] || []} defaultValue={defaultValue} onChange={value => update({ id: children, value })} />
  )
}

const StyledTags = styled(TagsInput)`
  margin-top: 1rem;
  .react-tagsinput-tag {
    background: #eee;
    padding: 6px 10px;
    margin: 0 6px 0 0;
  }
  input {
    margin-top: 1rem;
    display: block;
  }
`

export default Tags
