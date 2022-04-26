import React from 'react'
import styled from 'styled-components'

const Dashboard = ({ user }) => {
  return (
    <Wrapper>
      <div>
        <h3 className='title'>{user}</h3>
        <h5 className='title'>Wellcome to your dashboard</h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
`

export default Dashboard
