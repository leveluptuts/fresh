import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import TagsInput from 'react-tagsinput'
import styled from 'styled-components'

const Tags = ({ defaultValue = [], fieldId }) => {
  const { update, fieldState } = useSpecialField({ fieldId, defaultValue })

  return (
    <StyledTags
      value={fieldState || []}
      defaultValue={defaultValue}
      onChange={value => update({ id: fieldId, value })}
    />
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
