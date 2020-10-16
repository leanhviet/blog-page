// Libs
import React, { useState } from 'react'
import { debounce } from 'lodash'
import PropTypes from 'prop-types'

// Components
import Input from '../../../../components/Input'
import Dropdown from '../../../../components/Dropdown'
import Button from '../../../../components/Button'

const options = [
  {
    name: 'All',
    value: '',
  },
  {
    name: 'Content',
    value: 'content',
  },
  {
    name: 'Title',
    value: 'title',
  },
  {
    name: 'Create At',
    value: 'createdAt',
  },
]

const FeatureGroup = ({ handleSearch, handleSortBy }) => {
  const [fieldChoosen, setFieldChoosen] = useState('')

  const handleChange = (value) => {
    setFieldChoosen(value)
  }

  return (
    <div className="feature">
      <div className="feature__btn">
        <Dropdown
          className="dropdown"
          options={options}
          onChange={(value) => handleChange(value)}
        />
        <div>
          <Button
            className="btn btn-primary"
            onClick={debounce(() => handleSortBy(fieldChoosen, 'desc'), 500)}
            label="Desc"
          />
          <Button
            className="btn btn-primary"
            onClick={debounce(() => handleSortBy(fieldChoosen, 'asc'), 500)}
            label="Asc"
          />
        </div>
      </div>
      <div className="feature__search">
        <Input
          type="text"
          className="form-control"
          placeholder="Search..."
          handleChange={debounce((value) => handleSearch(value), 500)}
        />
      </div>
    </div>
  )
}

FeatureGroup.defaultProps = {
  handleSearch: () => {},
  handleSortBy: () => {},
}

FeatureGroup.propTypes = {
  handleSearch: PropTypes.func,
  handleSortBy: PropTypes.func,
}

export default React.memo(FeatureGroup)
