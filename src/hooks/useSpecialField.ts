import { useContext, useEffect } from 'react'
import { FormContext, FieldStateInterface } from '../state/State'

interface useSFInterface {
  fieldId: string, 
  defaultValue: string | boolean | number | object,
}


function useSpecialField({ fieldId, defaultValue }: useSFInterface) {

  const { registerField, formState, update } = useContext<FieldStateInterface>(FormContext)

  useEffect(() => {
    registerField({ id: fieldId, value: defaultValue })
  }, [])

  return { formState, update, fieldState: formState[fieldId] }
}

export default useSpecialField
