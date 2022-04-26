import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'

const SharedLayout = () => {
  return (
    <Wrapper className='section'>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section``

export default SharedLayout
