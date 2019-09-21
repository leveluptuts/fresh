import React, { useContext } from 'react'
import { FormContext } from './state/State'

const CancelButton = () => {
  const { resetForm } = useContext(FormContext)

  return (
    <button onClick={resetForm} type="reset">
      Cancel
    </button>
  )
}

export default CancelButton
