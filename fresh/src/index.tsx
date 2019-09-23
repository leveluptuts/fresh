import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
// @ts-ignore
import { FormProvider, FormContext } from './state/State'
// @ts-ignore
import CancelButton from './form/CancelButton'
// @ts-ignore
export { default as Field } from './Field'

const Form = props => {
  return (
    <FormProvider>
      <FormWrapper {...props} />
    </FormProvider>
  )
}

const FormWrapper = ({
  onSubmit,
  children,
  buttons,
  className,
  cancelButton,
  cancelAction,
  submitText,
  cancelText,
}) => {
  const { formState } = useContext(FormContext)
  return (
    <form
      className={`${className} fresh-form`}
      onSubmit={e => {
        e.preventDefault()
        onSubmit(formState)
      }}
    >
      {children}
      <div>
        {buttons || (
          <>
            <button id="fresh-submit" type="submit">
              {submitText}
            </button>
            {cancelButton && (
              <CancelButton
                cancelAction={cancelAction}
                cancelText={cancelText}
              />
            )}
          </>
        )}
      </div>
    </form>
  )
}

FormWrapper.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  cancelButton: PropTypes.bool,
  cancelAction: PropTypes.func,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
}

FormWrapper.defaultProps = {
  className: '',
  cancelButton: true,
  disabled: false,
  cancelAction: () => null,
  submitText: 'Submit',
  cancelText: 'Cancel',
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required feilds and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
export { Form }
