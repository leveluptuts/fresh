import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export const Form = ({ onSubmit, children, buttons }) => {
  return (
    <form action={onSubmit}>
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

export const Field = ({ children }) => {
  return (
    <div className='field'>
      <label htmlFor=''>
        <span>{children}</span>
        <input type='text' />
      </label>
    </div>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func])
}

Field.propTypes = {
  children: PropTypes.string.isRequired,
  buttons: null
}
