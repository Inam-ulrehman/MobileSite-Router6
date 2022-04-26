import React from 'react'
import styled from 'styled-components'
import data from '../data'
import { Link } from 'react-router-dom'

const Feature = () => {
  const { id: id1, img: img1, title: title1, price: price1 } = data[0]
  const { id: id2, img: img2, title: title2, price: price2 } = data[2]

  return (
    <Wrapper>
      <h3 className='title'>we offer quality services</h3>
      <div className='feature'>
        <div className='img1-container'>
          <Link className='offer' to={`/products/${id1}`}>
            Special offer
          </Link>
          <div className='img-container'>
            <img className='img' src={img1} alt='' />
          </div>
          <div className='img-footer'>
            <h4>{title1}</h4>
            <p>Price : {price1}</p>
          </div>
        </div>
        {/* second image */}
        <div className='img1-container'>
          <Link className='offer' to={`/products/${id2}`}>
            Special offer
          </Link>
          <div className='img-container'>
            <img className='img' src={img2} alt='' />
          </div>
          <div className='img-footer'>
            <h4>{title2}</h4>
            <p>Price : {price2}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .feature {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  .img1-container {
    position: relative;
    background-color: var(--white);
    box-shadow: var(--shadow-3);
    max-width: var(--fixed-width);
    border-radius: var(--borderRadius);
    .offer {
      color: var(--white);
      background-color: var(--primary-8);
      max-width: 120px;
      text-align: center;
      border-radius: 50%;
      padding: 1rem;
      position: absolute;
      top: -20px;
      left: 60px;
      :hover {
        transform: scale(110%);
      }
    }
  }
  .img-container {
    height: 300px;
    width: 300px;
    margin: 4rem auto;
  }
  .img-footer {
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      background-color: var(--primary-3);
      color: var(--white);
      padding: 0.7rem;
      border-radius: var(--borderRadius);
    }
  }
`
export default Feature
