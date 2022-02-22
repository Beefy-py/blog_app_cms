import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}

export default Layout
