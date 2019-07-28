import React from 'react'
import PropTypes from 'prop-types'
import camelCase from 'lodash/camelCase'
import './styles.css'
export { default as Field } from './Field'

export const Form = ({
  onSubmit,
  children,
  buttons,
  className,
  disabled,
  cancelButton
}) => {
  return (
    <form
      className={className}
      disabled={disabled}
      onSubmit={e => {
        e.preventDefault()
        const elementsArray = [...e.target.elements]
        const fields = elementsArray
          .filter(element => element.tagName !== 'BUTTON')
          .map(element => {
            const data = {
              type: element.tagName,
              value: element.value,
              key: element.parentNode.textContent
            }
            data[camelCase(element.parentNode.textContent)] = element.value
            return data
          })

        onSubmit({ data: fields })
      }}
    >
      {children}
      <div>
        {buttons || (
          <>
            <button type='submit'>Submit</button>
            {cancelButton && <button type='reset'>Cancel</button>}
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
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  cancelButton: PropTypes.bool
}

Form.defaultProps = {
  className: '',
  cancelButton: true,
  disabled: false
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required feilds and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
