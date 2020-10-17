// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { InputBase } from './index'

const props = {
  type: 'text',
  defaultValue: 'Search',
  placeholder: 'Search...',
  className: 'input',
}

describe('InputBase component', () => {
  const wrapper = shallow(<InputBase />)
  const wrapperWithProps = shallow(<InputBase {...props} />)

  it('should be defined InputBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot InputBase component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps InputBase component', () => {
    expect(InputBase.defaultProps.className).toEqual('')
    expect(InputBase.defaultProps.type).toEqual('text')
    expect(InputBase.defaultProps.defaultValue).toEqual('')
    expect(InputBase.defaultProps.placeholder).toEqual('')
  })

  // Testing mock props
  it('should be render mockProps InputBase component', () => {
    expect(wrapperWithProps.find('input').props().className).toContain(
      props.className,
    )
    expect(wrapperWithProps.find('input').props().placeholder).toEqual(
      props.placeholder,
    )
    expect(wrapperWithProps.find('input').props().type).toEqual(props.type)
    expect(wrapperWithProps.find('input').props().value).toEqual(
      props.defaultValue,
    )
  })
})
