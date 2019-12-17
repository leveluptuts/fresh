import React, { useContext } from 'react'
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
      <FormWrapper {...(rest as FormWrapperProps)} />
    </FormProvider>
  )
}

type FormWrapperProps = {
  cancelAction(): void
  cancelButton?: boolean
  cancelText?: string
  className?: string
  onSubmit(formState: object): void
  onChange?(formState: object): void
  submitText?: string
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  cancelAction = () => null,
  onChange = null,
  cancelButton = true,
  cancelText = 'Cancel',
  children,
  className = '',
  onSubmit,
  submitText = 'Submit',
}) => {
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
      onChange={() => {
        if (onChange) {
          const data: defaultValuesInterface = { ...formState }
          delete data.defaultValues
          onChange(data)
        }
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
