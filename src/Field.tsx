import React from 'react'
import { FieldInterface } from './fields/types'
import Tooltip from './form/Tooltip'
import Select from './fields/Select'
import Reference from './fields/Reference'
import Password from './fields/Password'
import Tags from './fields/Tags'
import TextArea from './fields/TextArea'
import NumberField from './fields/Number'
import Markdown from './fields/Markdown'
import Text from './fields/Text'
import Toggle from './fields/Toggle'

const camelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''
    return index == 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

const Field = ({
  required = false,
  children,
  name = '',
  type = 'text',
  label = true,
  error,
  placeholder = '',
  options,
  strength,
  className = '',
  defaultValue = '',
  displayProperty = '',
  keyProperty = 'id',
  tooltip,
  readOnly = false,
  wrapperStyle = {},
  formId = '',
}: FieldInterface) => {
  const fieldId = name || camelCase(children)

  const standardProps = {
    children,
    required,
    name,
    type,
    label,
    error,
    placeholder,
    options,
    className,
    defaultValue,
    displayProperty,
    readOnly,
    formId,
  }

  return (
    <div className={`fresh-field-wrapper ${fieldId}`} style={wrapperStyle}>
      <label className="fresh-label" htmlFor={`fresh-${fieldId}`}>
        <span className="fresh-title">
          {required && '*'} {label && children}&nbsp;
          {tooltip && <Tooltip tooltip={tooltip} />}
        </span>
        {(() => {
          switch (type) {
            case 'select':
              return <Select fieldId={fieldId} {...standardProps} />
            case 'reference':
              return (
                <Reference
                  fieldId={fieldId}
                  keyProperty={keyProperty}
                  {...standardProps}
                />
              )
            case 'password':
              return (
                <Password
                  strength={strength}
                  fieldId={fieldId}
                  {...standardProps}
                />
              )
            case 'tags':
              return <Tags fieldId={fieldId} {...standardProps} />
            case 'textarea':
              return <TextArea fieldId={fieldId} {...standardProps} />
            case 'number':
              return <NumberField fieldId={fieldId} {...standardProps} />
            case 'markdown':
              return <Markdown fieldId={fieldId} {...standardProps} />
            case 'toggle':
              return <Toggle fieldId={fieldId} {...standardProps} />
            default:
              return <Text fieldId={fieldId} {...standardProps} />
          }
        })()}
      </label>
      {error && <div className="fresh-error">{error}</div>}
    </div>
  )
}

Field.defaultProps = {
  defaultValue: null,
  options: [],
  tooltip: '',
}

export default Field
