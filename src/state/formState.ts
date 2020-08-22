import create from 'zustand'
import { immer } from './immer'

// Woof on theses types.
// TODO fix these types
const store = (set: (val: any) => any) => ({
  data: {},
  isReady: false,
  default: {},
  setForm: (formData: any, formId: string) =>
    set((state: any) => {
      state.data[formId] = { ...formData }
    }),
  setField: (id: string, value: any, formId: string) =>
    set((state: any) => {
      console.log(state.data?.[formId]?.[id], formId, id)
      state.data[formId][id] = value
    }),
  setDefaults: (formData: any, formId: string) =>
    set((state: any) => {
      state.default[formId] = { ...formData }
    }),
  register: (formId: string) =>
    set((state: any) => {
      state.data[formId] = {}
      state.isReady = true
    }),
  registerField: (fieldId: string, defaultValue: any, formId: string) =>
    set((state: any) => {
      state.data[formId][fieldId] = defaultValue
    }),
  resetForm: (formId: string) =>
    set((state: any) => {
      state.data[formId] = {}
    }),
})

export const useForm = create(immer(store))
