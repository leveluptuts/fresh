import React from 'react'
import PropTypes from 'prop-types'
import useSpecialField from '../hooks/useSpecialField'
import { FieldInterface } from './types'

const Password = ({
  fieldId,
  strength = true,
  defaultValue = '',
  children,
  placeholder,
}: FieldInterface) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  const strengthValue = calculateScore(fieldState || '')
  let strengthMeter = {
    background: '#ccc',
    width: 'calc(193px * 0.25)',
  }
  if (strengthValue === 2) {
    strengthMeter = {
      width: 'calc(193px * 0.5)',
      background: 'red',
    }
  } else if (strengthValue === 3) {
    strengthMeter = {
      width: 'calc(193px * 0.75)',
      background: 'red',
    }
  } else if (strengthValue === 4) {
    strengthMeter = {
      width: 'calc(193px * 1)',
      background: 'green',
    }
  }
  return (
    <>
      <input
        className="fresh-input fresh-input-password"
        placeholder={placeholder}
        value={fieldState || ''}
        id={`fresh-${fieldId}`}
        onChange={e => update({ value: e.target.value, id: fieldId })}
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

Password.propTypes = {
  strength: PropTypes.bool,
  placeholder: PropTypes.string,
}

Password.defaultProps = {
  placeholder: '',
}

export default Password

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
