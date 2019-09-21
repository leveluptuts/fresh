import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../state/State'

const CancelButton = ({ cancelAction, cancelText }) => {
  const { resetForm } = useContext(FormContext)

  return (
    <button
      id="fresh-cancel"
      onClick={() => {
        cancelAction()
        resetForm()
      }}
      type="reset"
    >
      {cancelText}
    </button>
  )
}

CancelButton.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  cancelText: PropTypes.string,
}

CancelButton.defaultProps = {
  cancelText: 'Cancel',
}
export default CancelButton
