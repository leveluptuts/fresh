import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import TagsInput from 'react-tagsinput'

const Tags = ({ defaultValue = [], fieldId }) => {
  const { update, fieldState } = useSpecialField({ fieldId, defaultValue })

  return (
    <TagsInput
      value={fieldState || []}
      onChange={value => update({ id: fieldId, value })}
      className="fresh-input fresh-input-tags"
      id={`fresh-${fieldId}`}
      style={{
        marginTop: '1rem',
      }}
    />
  )
}

export default Tags
