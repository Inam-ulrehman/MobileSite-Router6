import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Dashboard = ({ user }) => {
  return (
    <Wrapper>
      <div>
        <h3 className='title'>{user}</h3>
        <div className='title-underline'></div>
        <h5 className='title'>Wellcome to your dashboard</h5>
      </div>
      <p className='title'>You have't purchased any items yet...</p>
      <div className='btn-container'>
        <Link to={'/products'} className='btn '>
          Back to products
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  .btn-container {
    text-align: center;
  }
`

export default Dashboard
