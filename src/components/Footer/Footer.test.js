// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { FooterBase } from './index'

describe('FooterBase component', () => {
  const wrapper = shallow(<FooterBase />)

  // Testing Snapshot
  it('should be render snapshot FooterBase component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
