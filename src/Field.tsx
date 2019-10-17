import React, { useContext, useEffect } from 'react'
import { FormContext } from './state/State'
import Tooltip from './form/Tooltip'
import { COMPLEX_FIELDS } from './fields/constants'

const kebabCase = str =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

const camelCase = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ''
    return index == 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

interface FieldInterface {
  required: boolean
  children: string
  type: string
  name: string
  label: string
  error?: string
  placeholder: string
  options: string[] | object[]
  className: string
  defaultValue: string
  tooltip: string
  tooltipBackground: string
  tooltipColor: string
  tooltipIconColor: string
}

const Field = ({
  required,
  children,
  name,
  type,
  label,
  error,
  placeholder,
  options,
  className,
  defaultValue,
  tooltip,
  tooltipBackground,
  tooltipColor,
  tooltipIconColor,
  ...rest
}: FieldInterface) => {
  const { formState, update, registerField } = useContext(FormContext)
  const fieldId = name || camelCase(children)
  useEffect(() => {
    registerField({ id: fieldId, value: defaultValue })
  }, [])

  return (
    <div className={`fresh-field-wrapper ${fieldId}`}>
      <label className="fresh-label" htmlFor={`fresh-${fieldId}`}>
        <span className="fresh-title">
          {required && '*'} {label && children}&nbsp;
          {tooltip && (
            <Tooltip
              tooltip={tooltip}
              tooltipBackground={tooltipBackground}
              tooltipColor={tooltipColor}
              tooltipIconColor={tooltipIconColor}
            />
          )}
        </span>
        {Object.keys(COMPLEX_FIELDS).includes(type) ? (
          COMPLEX_FIELDS[type]({
            options,
            children,
            className,
            fieldId,
            placeholder,
            type,
            ...rest,
          })
        ) : (
          <input
            required={required}
            className={`fresh-input fresh-input-${type} ${className}`}
            placeholder={placeholder}
            id={`fresh-${fieldId}`}
            type={type}
            value={formState[fieldId]}
            onChange={e => {
              update({ id: fieldId, value: e.target.value })
            }}
            {...rest}
          />
        )}
      </label>
      {error && <div className="fresh-error">{error}</div>}
    </div>
  )
}

Field.defaultProps = {
  children: '',
  className: '',
  defaultValue: null,
  options: [],
  required: false,
  label: true,
  placeholder: '',
  name: '',
  type: 'text',
  tooltip: '',
  tooltipBackground: '#eee',
  tooltipColor: '#000',
  tooltipIconColor: '#000',
}

export default Field
