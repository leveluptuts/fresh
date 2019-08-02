import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { FormProvider, FormContext } from './state/State'
export { default as Field } from './Field'

const Form = (props) => {
  return (
    <FormProvider>
      <FormWrapper {...props} />
    </FormProvider>
  )
}

const FormWrapper = ({
  onSubmit,
  onChange,
  children,
  buttons,
  className,
  method,
  cancelButton
}) => {
  const { formState } = useContext(FormContext)
  return (
    <form
      className={className}
      method={method}
      onSubmit={e => {
        e.preventDefault()
        onSubmit({ data: formState })
      }}
      onChange={e => {
        e.preventDefault()
        onChange({ data: formState })
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

FormWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func]),
  className: PropTypes.string,
  method: PropTypes.string,
  cancelButton: PropTypes.bool
}

FormWrapper.defaultProps = {
  className: '',
  method: 'post',
  cancelButton: true
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required feilds and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
export { Form }

// TODO
// Markdown field
