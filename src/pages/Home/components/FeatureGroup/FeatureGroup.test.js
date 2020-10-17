// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { FeatureGroupBase } from './index'

describe('FeatureGroupBase component', () => {
  const wrapper = shallow(<FeatureGroupBase />)

  it('should be defined FeatureGroupBase component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot FeatureGroupBase component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
