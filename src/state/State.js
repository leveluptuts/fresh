import React, { useReducer, createContext } from 'react'

export const FormContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const data = {}
      data[action.id] = action.value
      return { ...state, ...data }
    case 'registerField':
      const yo = {}
      yo[action.id] = action.value || ''
      return { ...state, ...yo }
    default:
      throw new Error()
  }
}

export function FormProvider({ children }) {
  const [formState, dispatch] = useReducer(reducer, {})

  return (
    <FormContext.Provider
      value={{ formState, update: ({ id, value }) => dispatch({ type: 'update', id, value }), registerField: ({ id, value }) => dispatch({ type: 'registerField', id, value }) }}
    >
      {children}
    </FormContext.Provider>
  )
}
