import React from 'react'
import styled from 'styled-components'
import aboutimg from '../imgs/about.jpg'

const About = () => {
  return (
    <Wrapper>
      <div>
        <div className='about-page'>
          <div className='about-img-container'>
            <div>
              <img className='img' src={aboutimg} alt='' />
            </div>
          </div>
          <div className='about-text-conatiner'>
            <div>
              <h3 className='title'>Zone Shop</h3>
              <div className='title-underline'></div>
              <div>
                <ul className='title'>
                  <li>Fix Phones</li>
                  <li>New Phones</li>
                  <li>Accessories</li>
                  <li>Buy old Phones</li>
                  <li>Good Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='information'>
          <h4 className='title'>Our Goals</h4>
          <div className='title-underline'></div>
          <p className='title'>
            Having a strong clientele and a motivated, competent team is a solid
            foundation for a business, but for a business to grow, it's
            important to have clear objectives. When you set business
            objectives, you demonstrate your commitment to developing a company
            in specific ways. If you serve in a leadership role, it's important
            to set objectives for your team to give them clear goals and areas
            of improvement to work on.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    place-items: center;
    @media (min-width: 680) {
      margin: 0 auto;
    }
  }
  .about-img-container {
    height: 400px;
    div {
      padding: 1rem;
      .img {
        border-radius: var(--borderRadius);
        @media (min-width: 680px) {
          height: 300px;
          width: 300px;
        }
      }
    }
  }
  .information {
    background-color: var(--white);
    box-shadow: var(--shadow-3);

    border-radius: var(--borderRadius);
    p {
      padding: 2rem;
      margin: 0 auto;
    }
  }
`
export default About
