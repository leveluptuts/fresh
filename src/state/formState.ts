import React from 'react'
import create from 'zustand'
import { immer } from './immer'

// Woof on theses types.
// TODO fix these types
const store = (set: (val: any) => any) => ({
  data: {},
  isReady: {},
  defaultValues: {},
  setForm: (formData: any, formId: string) =>
    set((state: any) => {
      state.data[formId] = { ...formData }
    }),
  setField: (id: string, value: any, formId: string) =>
    set((state: any) => {
      state.data[formId][id] = value
    }),
  setDefaults: (formData: any, formId: string) =>
    set((state: any) => {
      state.defaultValues[formId] = { ...formData }
    }),
  register: (formData: any, formId: string) =>
    set((state: any) => {
      state.data[formId] = { ...formData }
      state.defaultValues[formId] = { ...formData }
      state.isReady[formId] = true
    }),
  unregister: (formId: string) =>
    set((state: any) => {
      state.isReady[formId] = false
    }),
  registerField: (fieldId: string, defaultValue: any, formId: string) =>
    set((state: any) => {
      state.data[formId][fieldId] = defaultValue
    }),
  resetForm: (formId: string) =>
    set((state: any) => {
      state.data[formId] = state.defaultValues[formId]
    }),
})

export const useForm = create(immer(store))

export const FormContext = React.createContext(null)
