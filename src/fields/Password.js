import React from 'react'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'
import useSpecialField from '../hooks/useSpecialField'

const Password = ({
  fieldId,
  strength = true,
  defaultValue = '',
  children,
  ...rest
}) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  const strengthValue = zxcvbn(fieldState || '').score
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
        value={fieldState || ''}
        id={`fresh-${fieldId}`}
        onChange={e => update({ value: e.target.value, id: fieldId })}
        {...rest}
      />
      {strength && (
        <div
          style={{
            height: '4px',
            marginBottom: '1rem',
            transition: '0.3s ease all',
            ...strengthMeter,
          }}
          strength={strength}
        />
      )}
    </>
  )
}

Password.propTypes = {
  strength: PropTypes.bool,
}

export default Password
