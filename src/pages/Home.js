import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Feature from '../components/Feature'
import Bottom from '../components/Bottom'

const Home = () => {
  return (
    <Wrapper>
      <div className='hero-image'>
        <div className='hero-text'>
          <h4>We sell good cell phone</h4>
          <Link className='btn style' to='/products'>
            {' '}
            Our Products
          </Link>
        </div>
      </div>
      <Feature />
      <Bottom />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .hero-text {
    padding: 1rem;
    border: 5px solid var(--primary-2);
    border-radius: var(--borderRadius);
    h4 {
      color: var(--grey-9);
      font-weight: bold;
    }
  }
`

export default Home
