// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { ButtonBase } from './index'

const mockFn = jest.fn()
const props = {
  onClick: mockFn,
  label: 'Create a blog',
  className: 'btn',
}

describe('Button component', () => {
  const wrapper = shallow(<ButtonBase />)
  const wrapperWithProps = shallow(<ButtonBase {...props} />)

  it('should be defined Button component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Button component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps Button component', () => {
    expect(ButtonBase.defaultProps.className).toEqual('')
    expect(ButtonBase.defaultProps.label).toEqual('')
    expect(ButtonBase.defaultProps.onClick()).toBeUndefined()
  })

  // Testing mock props
  it('should be render mockProps Button component', () => {
    expect(wrapperWithProps.find('button').props().className).toEqual(
      props.className,
    )
    expect(wrapperWithProps.find('button').props().children).toEqual(
      props.label,
    )
  })

  // Testing for action click
  it('behavior Button component', () => {
    wrapperWithProps.simulate('click', {})
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
