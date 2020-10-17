// Libs
import React from 'react'
import PropTypes from 'prop-types'

export const DropdownBase = ({ onChange, options, className }) => (
  <select
    className={`custom-select ${className}`}
    onChange={(event) => onChange(event.target?.value)}
  >
    {options?.map((item) => (
      <option key={`opt${item.value}`} value={item.value}>
        {item.name}
      </option>
    ))}
  </select>
)

DropdownBase.defaultProps = {
  onChange: () => {},
  className: '',
  options: [
    {
      name: '',
      value: '',
    },
  ],
}

DropdownBase.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
}

export default React.memo(DropdownBase)
