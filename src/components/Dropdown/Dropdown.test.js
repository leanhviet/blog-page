// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { DropdownBase } from './index'

const mockFn = jest.fn()
const props = {
  onChange: mockFn,
  options: [
    {
      name: 'All',
      value: 'all',
    },
  ],
  className: 'dropdown',
}

describe('DropdownBase component', () => {
  const wrapper = shallow(<DropdownBase />)
  const wrapperWithProps = shallow(<DropdownBase {...props} />)

  it('should be defined DropdownBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot DropdownBase component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps DropdownBase component', () => {
    expect(DropdownBase.defaultProps.className).toEqual('')
    expect(DropdownBase.defaultProps.options).toEqual([
      {
        name: '',
        value: '',
      },
    ])
    expect(DropdownBase.defaultProps.onChange()).toBeUndefined()
  })

  // Testing mock props
  it('should be render mockProps DropdownBase component', () => {
    expect(wrapperWithProps.find('select').props().className).toContain(
      props.className,
    )
    expect(wrapperWithProps.find('option').props().value).toEqual('all')
  })

  // Testing for action click
  it('behavior Button component', () => {
    wrapperWithProps.simulate('change', {})
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
