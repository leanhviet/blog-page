// Libs
import React from 'react'
import PropTypes from 'prop-types'

export const ButtonBase = ({
  label, className, onClick, disabled,
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
)

ButtonBase.defaultProps = {
  label: '',
  onClick: () => {},
  className: '',
  disabled: false,
}

ButtonBase.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default React.memo(ButtonBase)
