const Password = ({ children, ...rest }) => {
  return <input id={`fresh-${children}`} {...rest} />
}

export default Password
