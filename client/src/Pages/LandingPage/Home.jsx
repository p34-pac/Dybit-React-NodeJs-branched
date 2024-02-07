/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'

function Home() {
  return (
    <main className='landing'>
      <h1 className='welcome'>Welcome to DyBit</h1>

      <section className='access'>
        <div className='access-btn'>
          <a href='#'>
            <button className='signup-btn'>Sign Up</button>
          </a>
        </div>
        <div className='access-btn'>
          <a href='#'>
            <button className='signin-btn'>Sign In</button>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home