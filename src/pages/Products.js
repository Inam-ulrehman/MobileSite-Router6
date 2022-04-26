import React from 'react'
import data from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1 className='title'>List of products</h1>
      <div className='products'>
        {data.map((item) => {
          const { id, title, img } = item
          return (
            <Wrapper className='products' key={id}>
              <img src={img} alt='' />
              <h5>{title}</h5>
              <Link className='btn style' to={`/products/${id}`}>
                More info
              </Link>
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}
const Wrapper = styled.div`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  border-bottom: 5px solid var(--primary-3);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-3);
  img {
    height: 100px;
    width: 100px;
  }
  .style {
    width: 10rem;
  }
`

export default Products
