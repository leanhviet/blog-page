// Libs
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Main layout
import MainLayout from './pages'

// Store
import { store } from './store'

// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  </div>
)

export default App
