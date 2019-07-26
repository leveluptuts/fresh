import PropTypes from 'prop-types'
import Select from './fields/Select'

const COMPLEX_FIELDS = { select: Select }

const Field = ({ children, type, error, options }) => {
  return (
    <div className='field'>
      <label htmlFor=''>
        <span>{children}</span>
        {Object.keys(COMPLEX_FIELDS).includes(type) ? (
          COMPLEX_FIELDS[type]({ options })
        ) : (
          <input type={type} />
        )}
      </label>
      {error && <div className='error'>{error}</div>}
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string
}

Field.defaultProps = {
  children: '',
  type: 'text'
}

export default Field
