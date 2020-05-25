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
  readOnly?: boolean
  displayProperty?: string
}
