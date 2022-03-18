import React from 'react'
import Header from './components/Header'
import BlogMain from './components/BlogMain'

const App = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  }}
  >
    <Header />
    <BlogMain />
  </div>
)

export default App
