import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import zxcvbn from 'zxcvbn'
import { FormContext } from '../state/State'

const Password = ({ children, strength = true, ...rest }) => {
  const { formState, update } = useContext(FormContext)
  return (
    <>
      <input
        value={formState[children]}
        id={`fresh-${children}`}
        onChange={e => update({ value: e.target.value, id: children })}
        {...rest}
      />
      {strength && <Strength strength={zxcvbn(formState[children]).score} />}
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
