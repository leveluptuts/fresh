interface RefValue {
  id: string
  text: string
}

export interface FieldInterface {
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

interface PasswordInterface {
  required: boolean
  strength: boolean
  fieldId: string
  label: string
  error?: string
  placeholder: string
  className: string
  defaultValue: string
}
