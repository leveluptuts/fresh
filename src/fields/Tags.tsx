import React from 'react'
import useSpecialField from '../hooks/useSpecialField'
import TagsInput from 'react-tagsinput'
import { FieldInterface } from './types'

const Tags = ({ defaultValue = [], fieldId }: FieldInterface) => {
  const { update, fieldState } = useSpecialField({ fieldId, defaultValue })

  return (
    <TagsInput
      value={fieldState || []}
      onChange={value => update({ id: fieldId, value })}
      className="fresh-input-tags"
      id={`fresh-${fieldId}`}
      style={{
        marginTop: '1rem',
      }}
    />
  )
}

export default Tags
