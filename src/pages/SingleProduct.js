import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data'
import styled from 'styled-components'

const SingleProduct = () => {
  const { productID } = useParams()

  const newProducts = data.find((item) => {
    return item.id === productID
  })
  const { img, price, title } = newProducts

  return (
    <Wrapper>
      <div>
        <div className='img'>
          <img className='img size' src={img} alt='' />
        </div>
        <div className='img-footer'>
          <h3>{title}</h3>
          <h5>{price}</h5>
        </div>
      </div>
      <div className='btn-container'>
        <Link className='btn' to={'/products/'}>
          Back to products
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 500px;
  margin: 5rem auto;
  background-color: white;
  box-shadow: var(--shadow-4);
  .img {
    height: 500px;
    width: 500px;
    margin: 2rem auto;
  }
  .img-footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn-container {
    text-align: center;
    padding: 2rem;
  }
`
export default SingleProduct
