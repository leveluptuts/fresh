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

interface FormAction {
  type: string;
  id: Pick<ContextArguments, 'id'>;
  value: Pick<ContextArguments, 'value'>;
}

function reducer(state: Record<string, any>, action: Readonly<Partial<FormAction>>) {
  switch (action.type) {
    case 'update':
      const data: Record<string, any> = {}
      data[action.id] = action.value
      return { ...state, ...data }

    case 'registerField':
      const temp = {
        ...state,
      }

      // Adds blank value if default doesn't exist
      if (!temp[action.id] === undefined) {
        temp[action.id] = action.value
      }

      // Add field based default values if one doesn't exist
      if (temp.defaultValues[action.id] === undefined) {
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
