import React from 'react'

type InputProps = {
  name: string
  disabled?: boolean
  value: string | number | null
  label?: string
  type?: string
  placeholder?: string
  onChange: (e?: any) => void
  onBlur?: () => void
  required?: boolean
}

export const Input = ({
  name,
  label = '',
  onChange,
  value = '',
  onBlur,
  type = 'text',
  disabled = false,
  placeholder = '',
  required = false,
}: InputProps) => (
  <label className="fresh-label" htmlFor={name}>
    {label && <span className="fresh-title">{label}</span>}
    <input
      className={`fresh-input fresh-input-${type}`}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      id={name}
      required={required}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
    />
  </label>
)
