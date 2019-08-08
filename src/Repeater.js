import React, { useState, useEffect } from 'react'
import useSpecialField from './hooks/useSpecialField'

const Repeater = ({ children: [repeaterTitle, ...fields] }) => {
  // const { update } = useSpecialField({ fieldId, defaultValue })
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
      {repeaterState.map((item, index) =>
        React.cloneElement(<>{fields}</>, {
          repeater: true,
        })
      )}
      <button onClick={removeItem}>-</button>
      <button onClick={addItem}>+</button>
    </div>
  )
}

export default Repeater
