import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h4>
          All &copy; Right are Reserved by Inam {new Date().getFullYear()}..
        </h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--primary-1);
  div {
    text-align: center;
    padding: 1rem;
  }
`

export default Footer
