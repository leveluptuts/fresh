import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'

const Tags = ({ defaultValue = [] }) => {
  const [tags, setTags] = useState(defaultValue)
  return (
    <TagsInput value={tags} onChange={setTags} />
  )
}

export default Tags

// TODO
// Figure out how to get array of tags out of the field. Probably context?
