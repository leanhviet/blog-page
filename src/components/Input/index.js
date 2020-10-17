// Libs
import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'

export const InputBase = ({
  type,
  label,
  defaultValue,
  placeholder,
  innerRef,
  errorMessage,
  handleChange,
  className,
}) => {
  const classError = errorMessage ? 'input-group__field__text--error' : ''
  const [valueInput, setValueInput] = useState(defaultValue)

  const onChange = (event) => {
    const valueOnChange = event.target.value

    setValueInput(valueOnChange)
    handleChange(valueOnChange)
  }

  return (
    <div className="input-group">
      <div className="input-group__field">
        {label && <label className="input-group__field__label">{label}</label>}
        <input
          type={type}
          className={`input-group__field__text ${classError} ${className}`}
          value={valueInput}
          placeholder={placeholder}
          onChange={onChange}
          ref={innerRef}
        />
      </div>
      {errorMessage && <i className="input-group__error">{errorMessage}</i>}
    </div>
  )
}

InputBase.defaultProps = {
  type: 'text',
  label: '',
  defaultValue: '',
  placeholder: '',
  innerRef: createRef(),
  errorMessage: '',
  handleChange: () => {},
  className: '',
}

InputBase.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  innerRef: PropTypes.object,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  className: PropTypes.string,
}

export default React.memo(InputBase)
