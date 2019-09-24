import React, { useReducer, createContext, ReactNode } from 'react'

export interface ContextArguments {
  id: string
  value: string | boolean | number | object
}

export interface FieldStateInterface {
  formState: object
  update(fieldData: ContextArguments): void
  registerField(fieldData: ContextArguments): void
  resetForm(): void
}

export const FormContext = createContext<FieldStateInterface | null>(null)

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const data = {}
      data[action.id] = action.value
      return { ...state, ...data }

    case 'registerField':
      const temp = {
        ...state,
      }

      // Adds blank value if default doesn't exist
      if (!temp[action.id]) {
        temp[action.id] = action.value || ''
      }
      // Add field based default values if one doesn't exist
      if (!temp.defaultValues[action.id]) {
        temp.defaultValues[action.id] = action.value || ''
      }

      return temp

    case 'resetForm':
      const { defaultValues } = state
      return {
        defaultValues,
        ...state.defaultValues,
      }

    default:
      throw new Error()
  }
}

export function FormProvider({
  children,
  defaultValues,
}: {
  children: ReactNode
  defaultValues: object
}) {
  const [formState, dispatch] = useReducer(reducer, {
    defaultValues,
    ...defaultValues,
  })

  const ContextProvider: FieldStateInterface = {
    formState,
    update: ({ id, value }) => dispatch({ type: 'update', id, value }),
    registerField: ({ id, value }) =>
      dispatch({ type: 'registerField', id, value }),
    resetForm: () => dispatch({ type: 'resetForm' }),
  }

  return (
    <FormContext.Provider value={ContextProvider}>
      {children}
    </FormContext.Provider>
  )
}
