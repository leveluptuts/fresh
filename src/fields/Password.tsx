import React from 'react'
import { useForm } from '../state/formState'
import { FieldInterface } from './types'

const Password = ({
  defaultValue = '',
  placeholder,
  className = '',
  required,
  fieldId,
  strength = true,
  type,
  formId,
}: FieldInterface) => {
  const { data, setField, isReady } = useForm()
  // If the form is not registered or there is not data object

  if (!isReady) return null

  const strengthValue = calculateScore(data[formId][fieldId] || '')

  let strengthMeter = {
    background: '#ccc',
    width: 'calc(193px * 0.25)',
  }
  if (strengthValue >= 2 && strengthValue < 3) {
    strengthMeter = {
      width: 'calc(193px * 0.5)',
      background: 'red',
    }
  } else if (strengthValue >= 3 && strengthValue < 4) {
    strengthMeter = {
      width: 'calc(193px * 0.75)',
      background: 'red',
    }
  } else if (strengthValue >= 4) {
    strengthMeter = {
      width: 'calc(193px * 1)',
      background: 'green',
    }
  }
  return (
    <>
      <input
        className={`fresh-input fresh-input-password ${className}`}
        placeholder={placeholder}
        type={type}
        required={required}
        id={`fresh-${fieldId}-${formId}`}
        value={data[formId][fieldId]}
        onChange={e => setField(fieldId, e.target.value, formId)}
      />
      {strength && (
        <div
          style={{
            height: '4px',
            marginBottom: '1rem',
            transition: '0.3s ease all',
            ...strengthMeter,
          }}
        />
      )}
    </>
  )
}

const options = {
  showText: true,
  fieldPartialMatch: true,
  minimumLength: 4,
}

function calculateScore(password: string) {
  var score = 0

  // password < options.minimumLength
  if (password.length < options.minimumLength) {
    return -1
  }
  // password length
  score += password.length * 4

  // password has 3 numbers
  if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
    score += 5
  }

  // password has at least 2 sybols
  var symbols: any = '.*[!,@,#,$,%,^,&,*,?,_,~]'
  symbols = new RegExp('(' + symbols + symbols + ')')
  if (password.match(symbols)) {
    score += 5
  }

  // password has Upper and Lower chars
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    score += 10
  }

  // password has number and chars
  if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
    score += 15
  }

  // password has number and symbol
  if (
    password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) &&
    password.match(/([0-9])/)
  ) {
    score += 15
  }

  // password has char and symbol
  if (
    password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) &&
    password.match(/([a-zA-Z])/)
  ) {
    score += 15
  }

  // password is just numbers or chars
  if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
    score -= 10
  }

  if (score > 100) {
    score = 100
  }

  if (score < 0) {
    score = 0
  }

  return score * 0.04
}

export default Password
