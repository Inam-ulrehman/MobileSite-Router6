import React from 'react'
import styled from 'styled-components'
import bottomimg from '../imgs/bottom.jpg'

const Bottom = () => {
  return (
    <Wrapper>
      <div className='bottom-container'>
        <div className='title'>
          <h4>We fix old and New phones</h4>
          <div className='title-underline'></div>
        </div>
        <div className='bottom-img'>
          <p className='top-p'>
            We prepare all kind of mobile phone and deliver on time.
          </p>
          <img className='img' src={bottomimg} alt='' />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: var(--primary-1);
  .bottom-container {
    height: 600px;
    background-color: var(--primary-1);
    margin-top: 2rem;
    position: relative;
    max-width: var(--fixed-width);
    margin: 0 auto;
  }
  .bottom-img {
    .top-p {
      position: absolute;
      margin-left: 15rem;
      background-color: var(--primary-1);
      padding: 0.3rem;
      border-radius: var(--borderRadius);
      color: var(--primary-9);
      margin-right: 1rem;
    }
  }
`
export default Bottom
