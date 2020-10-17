// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { BlogItemBase } from './index'

const props = {
  blog: {
    id: 1,
    content: 'This is content',
    title: 'Title',
  },
}

describe('BlogItemBase component', () => {
  const wrapper = shallow(<BlogItemBase />)
  const wrapperWithProps = shallow(<BlogItemBase {...props} />)

  it('should be defined BlogItemBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot BlogItemBase component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps BlogItemBase component', () => {
    expect(BlogItemBase.defaultProps.blog).toEqual({})
  })

  // Testing mock props
  it('should be render mockProps DetailBase component', () => {
    expect(wrapperWithProps.find('Link').props().children).toEqual(
      props.blog.title,
    )
    expect(wrapperWithProps.find('p').props().children).toBe(props.blog.content)
  })
})
