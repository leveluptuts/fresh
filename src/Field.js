import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from './fields/Select';
import Password from './fields/Password';

const COMPLEX_FIELDS = { select: Select, password: Password };

const Field = ({
  required,
  children,
  type,
  error,
  options,
  className,
  readOnly
}) => {
  // const requiredString = required ? "required"

  const [thing, setThing] = useState('');
  return (
    <div className={`field-wrapper ${className}`}>
      <label htmlFor={`fresh-${children}`}>
        <span>
          {children} {required && '*'}
        </span>
        {Object.keys(COMPLEX_FIELDS).includes(type) ? (
          COMPLEX_FIELDS[type]({ options, children, readOnly, className, type })
        ) : (
          <input
            readOnly={readOnly}
            required={required}
            className={className}
            id={`fresh-${children}`}
            type={type}
          />
        )}
      </label>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool
};

Field.defaultProps = {
  children: '',
  className: '',
  type: 'text',
  options: [],
  required: false
};

export default Field;
