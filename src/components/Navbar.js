import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../imgs/logo.png'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='log'>
        <img src={logo} alt='' />
      </div>
      <div>
        <NavLink className={'nav-link'} to={'/'}>
          Home
        </NavLink>
        <NavLink className={'nav-link'} to={'/about'}>
          About
        </NavLink>
        <NavLink className={'nav-link'} to={'/products'}>
          Products
        </NavLink>
        <NavLink className={'nav-link'} to={'/login'}>
          Login
        </NavLink>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  background-color: var(--primary-5);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-link {
    color: var(--white);
    padding: 0.8rem;
    font-size: 0.8rem;
    @media (min-width: 700px) {
      padding: 1.2rem;
      font-size: 1.2rem;
    }
  }
  .log {
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }
`

export default Navbar
