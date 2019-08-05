import React, { useContext, useEffect } from 'react'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import Select from './fields/Select'
import Password from './fields/Password'
import Tags from './fields/Tags'
import TextArea from './fields/TextArea'
import Markdown from './fields/Markdown'
import Toggle from './fields/Toggle'
import { FormContext } from './state/State'

const COMPLEX_FIELDS = { select: Select, password: Password, tags: Tags, markdown: Markdown, textarea: TextArea, toggle: Toggle }

const Field = ({
  required,
  children,
  type,
  label,
  error,
  options,
  className,
  defaultValue,
  ...rest
}) => {
  const { formState, update, registerField } = useContext(FormContext)
  // console.log('formState', formState)
  const fieldId = kebabCase(children)
  console.log('fieldId', fieldId)

  useEffect(() => {
    registerField({ id: fieldId, value: defaultValue })
  }, [])

  return (
    <div className={`field-wrapper ${fieldId}`}>
      <label htmlFor={`fresh-${fieldId}`}>

        <span>
          {label && children} {required && '*'}
        </span>
        {Object.keys(COMPLEX_FIELDS).includes(type) ? (
          COMPLEX_FIELDS[type]({ options, children, className, fieldId, type, ...rest })
        ) : (
          <input
            required={required}
            className={className}
            id={`fresh-${fieldId}`}
            type={type}
            value={formState[fieldId]?.value || ''}
            onChange={e => update({ id: children, value: e.target.value })}
            {...rest}
          />
        )}
      </label>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  label: PropTypes.bool
}

Field.defaultProps = {
  children: '',
  className: '',
  type: 'text',
  options: [],
  required: false,
  label: true,
  defaultValue: null
}

export default Field
// MEGA IDEA EFFORTLESS FORMS

// A field should be able to be used just by exporting the context
// This would allow for an api that looks like... <Field />Name {name} useContext
