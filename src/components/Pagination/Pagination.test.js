// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { PaginationBase } from './index'

const props = {
  totalRecords: 30,
  pageLimit: 5,
  initialPage: 1,
  pagesToShow: 5,
}

describe('PaginationBase component', () => {
  const wrapper = shallow(<PaginationBase />)
  const wrapperWithProps = shallow(<PaginationBase {...props} />)

  it('should be defined PaginationBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot PaginationBase component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })
})
