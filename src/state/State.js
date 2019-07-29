import React, { useReducer, createContext } from 'react'

export const FormContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const data = {}
      data[action.id] = action.value
      console.log('data', state, data)
      return { ...state, ...data }
    default:
      throw new Error()
  }
}

export function FormProvider({ children }) {
  const [formState, dispatch] = useReducer(reducer, {})

  return (
    <FormContext.Provider
      value={{ formState, update: ({ id, value }) => dispatch({ type: 'update', id, value }) }}
    >
      {children}
    </FormContext.Provider>
  )
}
