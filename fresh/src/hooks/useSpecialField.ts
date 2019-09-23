import { useContext, useEffect } from 'react'
import { FormContext } from '../state/State'

function useSpecialField({ fieldId, defaultValue }) {
  const { registerField, formState, update } = useContext(FormContext)
  useEffect(() => {
    registerField({ id: fieldId, value: defaultValue })
  }, [])
  return { formState, update, fieldState: formState[fieldId] }
}

export default useSpecialField
