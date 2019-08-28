import React, { useState, useEffect } from 'react'
import kebabCase from 'lodash/kebabCase'
import useSpecialField from './hooks/useSpecialField'

const Repeater = ({ children: [repeaterTitle, ...fields] }) => {
  // const { update } = useSpecialField({ fieldId, defaultValue })
  const fieldId = kebabCase(repeaterTitle)
  const [repeaterState, updateRepeater] = useState([null])

  // debugger
  const addItem = () => {
    updateRepeater([...repeaterState, null])
  }

  const removeItem = () => {
    const newList = repeaterState
    newList.pop()
    updateRepeater([...newList])
  }

  return (
    <div>
      <p>{repeaterTitle}</p>
      {repeaterState.map((item, index) => (
        <FieldsWrapper
          repeater
          index={index + 1}
          updateRepeater={updateRepeater}
          repeaterState={repeaterState}
        >
          {fields}
        </FieldsWrapper>
      ))}
      <button onClick={removeItem}>-</button>
      <button onClick={addItem}>+</button>
    </div>
  )
}

const FieldsWrapper = ({
  index,
  repeater,
  children,
  updateRepeater,
  repeaterState,
}) => {
  const update = ({ fieldId, value }) => {
    const newState = repeaterState
    newState[index - 1] = { id: fieldId, value }
    updateRepeater(newState)
  }
  console.log('repeaterState', repeaterState)
  return (
    <>
      {children.map(child =>
        React.cloneElement(child, {
          index,
          isRepeater: repeater,
          updateRepeater: update,
          repeaterValue: repeaterState[index - 1]?.value || '',
        })
      )}
    </>
  )
}

export default Repeater
