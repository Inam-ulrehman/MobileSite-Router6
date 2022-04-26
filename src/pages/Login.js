import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle Submit ')
    if (!name || !email) {
      return
    }
    setUser(name)
    navigate('/dashboard')
  }
  return (
    <Wrapper>
      <div className='login-page'>
        <div className='title'>
          <h4>Welcome....</h4>
          <div className='title-underline'></div>
          <p>Please login to your account</p>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                className='form-input'
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                className='form-input'
                type='text'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='btn-container'>
              <button className='btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  height: 600px;
  .btn-container {
    text-align: center;
  }
`
export default Login
