// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { DetailBase } from './index'

const props = {
  blogData: {
    blog: {
      content: 'This is content',
      title: 'Title',
      createdAt: '',
    },
  },
  match: {
    params: {
      id: '1',
    },
  },
}

describe('DetailBase component', () => {
  const wrapper = shallow(<DetailBase />)
  const wrapperWithProps = shallow(<DetailBase {...props} />)

  it('should be defined DetailBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot DetailBase component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps DetailBase component', () => {
    expect(DetailBase.defaultProps.blogData).toEqual({
      blog: {
        title: '',
        content: '',
        createdAt: '',
      },
    })
    expect(DetailBase.defaultProps.match).toEqual({
      params: {
        id: '1',
      },
    })
  })

  // Testing mock props
  it('should be render mockProps DetailBase component', () => {
    expect(wrapperWithProps.find('h1').props().children).toEqual(
      props.blogData.blog.title,
    )
    expect(wrapperWithProps.find('.detail__content').length).toBe(1)
  })
})
