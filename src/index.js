import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export const Form = ({ onSubmit, children }) => {
  return <form action={onSubmit}>{children}</form>
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
  onSubmit: PropTypes.func.isRequired
}

Field.propTypes = {
  children: PropTypes.string.isRequired
}
