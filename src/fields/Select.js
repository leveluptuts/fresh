import PropTypes from 'prop-types'

const Select = ({ options, children }) => {
  return (
    <select id={`fresh-${children}`}>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.string
}

Select.defaultProps = {
  children: ''
}

export default Select
