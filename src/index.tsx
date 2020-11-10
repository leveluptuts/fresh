import React, { useEffect } from 'react'
import { useForm, FormContext } from './state/formState'
import CancelButton from './form/CancelButton'
export { default as Field } from './Field'
import './fields/global.css'

type FormProps = {
  cancelAction?: (_: any) => void
  cancelButton?: boolean
  cancelText?: string
  formId: string
  className?: string
  defaultValues?: any // sorry. not sure how to type this properly PR wanted
  onSubmit(formState: { [key: string]: any }): void
  onChange?(formState: object): void
  submitText?: string
}

const Form: React.FC<FormProps> = ({
  cancelAction = () => null,
  onChange = null,
  cancelButton = true,
  cancelText = 'Cancel',
  children,
  formId,
  onSubmit,
  submitText = 'Submit',
  className = '',
  defaultValues = {},
}) => {
  const { data, register, isReady, unregister } = useForm()

  useEffect(() => {
    register(defaultValues, formId)
    return () => {
      unregister(formId)
    }
  }, [])

  if (!isReady[formId]) return null

  return (
    <FormContext.Provider value={{ formId }}>
      <form
        className={`${className} fresh-form`}
        onSubmit={e => {
          e.preventDefault()
          onSubmit(data[formId])
        }}
        onChange={() => {
          if (onChange) onChange(data[formId])
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
            <CancelButton
              formId={formId}
              cancelAction={cancelAction}
              cancelText={cancelText}
            />
          )}
        </div>
      </form>
    </FormContext.Provider>
  )
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required fields and all

// Future api idea <Form mutation={GRAPHQL_MUTATION} /> one liner

// Reset on submit option
export { Form, useForm }
