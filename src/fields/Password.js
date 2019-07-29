import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import zxcvbn from 'zxcvbn'

const Password = ({ children, strength = true, ...rest }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <input
        value={value}
        id={`fresh-${children}`}
        onChange={e => setValue(e.target.value)}
        {...rest}
      />
      {strength && <Strength strength={zxcvbn(value).score} />}
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
