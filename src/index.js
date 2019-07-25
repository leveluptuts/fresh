import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
export { default as Field } from './Field'

export const Form = ({ onSubmit, children, buttons }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
    >
      {children}
      <div>
        {buttons || (
          <>
            <button>Cancel</button>
            <button>Submit</button>
          </>
        )}
      </div>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func])
}
