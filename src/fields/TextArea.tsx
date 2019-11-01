import React from 'react'
import useSpecialField from '../hooks/useSpecialField'

interface RefValue {
  id: string
  text: string
}

type Props = {
  required?: boolean
  children: string
  type?: string
  fieldId?: string
  name?: string
  label?: boolean
  error?: string
  placeholder?: string
  options: any
  className?: string
  defaultValue?: string | boolean | number | [] | RefValue | {}
  tooltip?: string
  strength?: boolean
  tooltipBackground?: string
  tooltipColor?: string
  tooltipIconColor?: string
  displayProperty?: string
}

export const TextArea: React.FC<Props> = ({
  defaultValue = '',
  fieldId,
  placeholder,
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <textarea
      id={`fresh-${fieldId}`}
      placeholder={placeholder}
      value={fieldState || ''}
      className="fresh-input fresh-input-textarea"
      onChange={e => update({ id: fieldId, value: e.target.value })}
    />
  )
}

export default TextArea
