import PropTypes from 'prop-types'
import './styles.css'
export { default as Field } from './Field'

export const Form = ({ onSubmit, children, buttons }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const elementsArray = [...e.target.elements]
        const fields = elementsArray
          .filter(element => element.tagName !== 'BUTTON')
          .map(element => {
            const data = {
              type: element.tagName,
              value: element.value,
              key: element.parentNode.textContent
            }
            data[element.parentNode.textContent] = element.value
            return data
          })

        onSubmit({ data: fields })
      }}
    >
      {children}
      <div>
        {buttons || (
          <>
            <button type='reset'>Cancel</button>
            <button type='submit'>Submit</button>
          </>
        )}
      </div>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  buttons: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.func])
}

// TODO
// AUto form prop that allows for automatic form building via graphql. Required feilds and all
