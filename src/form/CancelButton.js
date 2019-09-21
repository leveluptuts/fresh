import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../state/State'

const CancelButton = ({ cancelAction }) => {
  const { resetForm } = useContext(FormContext)

  return (
    <button
      onClick={() => {
        cancelAction()
        resetForm()
      }}
      type="reset"
    >
      Cancel
    </button>
  )
}

CancelButton.propTypes = {
  cancelAction: PropTypes.func.isRequired,
}

export default CancelButton
