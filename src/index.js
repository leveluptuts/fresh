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
  loading,
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
      <fieldset disabled={loading} aria-busy={loading}>
        {children}
        <div>
          {buttons || (
          <>
            <button type='submit'>Submit</button>
            {cancelButton && <button type='reset'>Cancel</button>}
          </>
          )}
        </div>
      </fieldset>
    </form>
  )
}

FormWrapper.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func]),
  className: PropTypes.string,
  method: PropTypes.string,
  loading: PropTypes.bool,
  cancelButton: PropTypes.bool
}

FormWrapper.defaultProps = {
  className: '',
  cancelButton: true,
  method: 'post',
  loading: false
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required feilds and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
export { Form }

// TODO
// Markdown field
