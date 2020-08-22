import React from 'react'
import { useForm } from '../state/formState'

const CancelButton = ({
  cancelAction,
  cancelText = 'Cancel',
  formId,
}: Props) => {
  const { data, setField, isReady, resetForm } = useForm()
  return (
    <button
      id="fresh-cancel"
      className="fresh-button fresh-cancel"
      onClick={() => {
        cancelAction(formId)
        resetForm(formId)
      }}
      type="reset"
    >
      {cancelText}
    </button>
  )
}

type Props = {
  cancelAction: (resetForm) => void
  cancelText: string
  formId: string
}
export default CancelButton
