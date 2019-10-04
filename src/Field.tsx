import React, { useContext, useEffect } from 'react'
import Select from './fields/Select'
import Reference from './fields/Reference'
import Password from './fields/Password'
import Tags from './fields/Tags'
import TextArea from './fields/TextArea'
import Markdown from './fields/Markdown'
import Toggle from './fields/Toggle'
import { FormContext } from './state/State'
import Toooltip from './form/Tooltip'
import Tooltip from './form/Tooltip'

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

const COMPLEX_FIELDS = {
  select: Select,
  password: Password,
  tags: Tags,
  markdown: Markdown,
  textarea: TextArea,
  toggle: Toggle,
  reference: Reference,
}

interface FieldInterface {
  required: boolean
  children: string
  type: string
  label: string
  error?: string
  placeholder: string
  options: string[] | object[]
  className: string
  defaultValue: string
  tooltip: string
}

const Field = ({
  required,
  children,
  type,
  label,
  error,
  placeholder,
  options,
  className,
  defaultValue,
  tooltip,
  ...rest
}: FieldInterface) => {
  const { formState, update, registerField } = useContext(FormContext)
  const fieldId = camelCase(children)

  useEffect(() => {
    registerField({ id: fieldId, value: defaultValue })
  }, [])

  return (
    <div className={`fresh-field-wrapper ${fieldId}`}>
      <label className="fresh-label" htmlFor={`fresh-${fieldId}`}>
        <span className="fresh-title">
          {required && '*'} {label && children}&nbsp;
          {tooltip && <Tooltip tooltip={tooltip} />}
        </span>
        {Object.keys(COMPLEX_FIELDS).includes(type) ? (
          COMPLEX_FIELDS[type]({
            required,
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
  type: 'text',
}

export default Field
