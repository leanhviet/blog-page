// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className="layout">
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
}

export default React.memo(Layout)
