import React, { useReducer, createContext } from 'react'

export const FormContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const data = {}
      data[action.id] = action.value
      return { ...state, ...data }
    case 'registerField':
      const yo = {
        defaultValues: {
          ...state.defaultValues,
        },
      }
      yo[action.id] = action.value || ''
      yo.defaultValues[action.id] = action.value || ''
      return { ...state, ...yo }
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

export function FormProvider({ children }) {
  const [formState, dispatch] = useReducer(reducer, {})

  return (
    <FormContext.Provider
      value={{
        formState,
        update: ({ id, value }) => dispatch({ type: 'update', id, value }),
        registerField: ({ id, value }) =>
          dispatch({ type: 'registerField', id, value }),
        resetForm: () => dispatch({ type: 'resetForm' }),
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
