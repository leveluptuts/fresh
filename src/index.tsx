import React, { useContext, ReactNode } from 'react'
// @ts-ignore
import { FormProvider, FormContext } from './state/State'
import Global from './style'
// @ts-ignore
import CancelButton from './form/CancelButton'
// @ts-ignore
export { default as Field } from './Field'

const Form = (props: any) => {
  return (
    <FormProvider>
      <Global />
      <FormWrapper {...props} />
    </FormProvider>
  )
}

interface FormWrapperInterface {
  buttons: any
  cancelAction(): void
  cancelButton: boolean
  cancelText: string
  children: ReactNode | ReactNode[]
  className: string
  disabled: boolean
  onSubmit(formState: any): void
  submitText: string
}

const FormWrapper = ({
  buttons,
  cancelAction = () => null,
  cancelButton = true,
  cancelText = 'Cancel',
  children,
  className,
  disabled = false,
  onSubmit,
  submitText = 'Submit',
}: FormWrapperInterface) => {
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

// TODO
// AUto form prop that allows for automatic form building via graphql. Required feilds and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
export { Form }
