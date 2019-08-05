import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import zxcvbn from 'zxcvbn'
import useSpecialField from '../hooks/useSpecialField'

// TODO change out formState for a new "fieldState" value that will come from the useSpecialfield hook

const Password = ({ fieldId, strength = true, defaultValue = '', children, ...rest }) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <>
      <input
        value={fieldState || ''}
        id={`fresh-${fieldId}`}
        onChange={e => update({ value: e.target.value, id: fieldId })}
        {...rest}
      />
      {strength && <Strength strength={zxcvbn(fieldState || '').score} />}
    </>
  )
}

Password.propTypes = {
  strength: PropTypes.bool
}

const Strength = styled.div`
  height: 4px;
  background: #ccc;
  width: calc(193px * 0.25);
  margin-bottom: 1rem;
  transition: 0.3s ease all;
  ${({ strength }) => {
    if (strength === 2) {
      return css`
        width: calc(193px * 0.50);
        background: red;
      `
    }
    if (strength === 3) {
      return css`
        width: calc(193px * 0.75);
        background: red;
      `
    }
    if (strength === 4) {
      return css`
        width: calc(193px * 1);
        background: green;
      `
    }
  }}
`

export default Password
