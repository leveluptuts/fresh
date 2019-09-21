import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from './state/State'

const CancelButton = ({ cancelText }) => {
  const { resetForm } = useContext(FormContext)

  return (
    <button id="fresh-cancel" onClick={resetForm} type="reset">
      {cancelText}
    </button>
  )
}

export default CancelButton

CancelButton.propTypes = {
  cancelText: PropTypes.string,
}

CancelButton.defaultProps = {
  cancelText: 'Cancel',
}
