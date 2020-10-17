// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { HeaderBase } from './index'

describe('HeaderBase component', () => {
  const wrapper = shallow(<HeaderBase />)

  // Testing Snapshot
  it('should be render snapshot HeaderBase component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
