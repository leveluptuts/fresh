import React, { useContext, ReactNode } from 'react'
import { FormProvider, FormContext, FieldStateInterface } from './state/State'
import Global from './style'
import CancelButton from './form/CancelButton'
export { default as Field } from './Field'

interface defaultValuesInterface {
  defaultValues?: object
}

interface FormProps {
  defaultValues?: defaultValuesInterface
}

const Form = ({ defaultValues = {}, ...rest }: FormProps) => {
  return (
    <FormProvider defaultValues={defaultValues}>
      <Global />
      <FormWrapper {...(rest as FormWrapperInterface)} />
    </FormProvider>
  )
}

interface FormWrapperInterface {
  cancelAction(): void
  cancelButton?: boolean
  cancelText?: string
  children: ReactNode | ReactNode[]
  className?: string
  onSubmit(formState: object): void
  submitText?: string
}

const FormWrapper = ({
  cancelAction = () => null,
  cancelButton = true,
  cancelText = 'Cancel',
  children,
  className = '',
  onSubmit,
  submitText = 'Submit',
}: FormWrapperInterface) => {
  const { formState }: FieldStateInterface = useContext(FormContext)

  return (
    <form
      className={`${className} fresh-form`}
      onSubmit={e => {
        e.preventDefault()
        const data: defaultValuesInterface = { ...formState }
        delete data.defaultValues
        onSubmit(data)
      }}
    >
      {children}
      <div>
        <button
          id="fresh-submit"
          className="fresh-button fresh-submit"
          type="submit"
        >
          {submitText}
        </button>
        {cancelButton && (
          <CancelButton cancelAction={cancelAction} cancelText={cancelText} />
        )}
      </div>
    </form>
  )
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required fields and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
export { Form }
