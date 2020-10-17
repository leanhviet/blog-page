// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { HomeBase } from './index'

const props = {
  mainData: {
    blogs: [
      {
        id: 1,
        content: 'This is content',
        title: 'Title',
      },
      {
        id: 2,
        content: 'This is content 2',
        title: 'Title 2',
      },
    ],
    totalRecords: 30,
  },
}

describe('HomeBase component', () => {
  const wrapper = shallow(<HomeBase />)
  const wrapperWithProps = shallow(<HomeBase {...props} />)

  it('should be defined HomeBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot HomeBase component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps HomeBase component', () => {
    expect(HomeBase.defaultProps.mainData).toEqual({
      blogs: [],
      totalRecords: 0,
    })
  })

  // Testing mock props
  it('should be render mockProps HomeBase component', () => {
    expect(wrapperWithProps.find('Memo(BlogItemBase)').length).toBe(2)
  })
})
