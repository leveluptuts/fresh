import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
export { default as Field } from './Field'

export const Form = ({ onSubmit, children, buttons }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const elementsArray = [...e.target.elements]
        const fields = elementsArray.filter(
          element => element.tagName !== 'BUTTON'
        )
        console.log('fields', fields)

        onSubmit()
      }}
    >
      {children}
      <div>
        {buttons || (
          <>
            <button type='reset'>Cancel</button>
            <button type='submit'>Submit</button>
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
