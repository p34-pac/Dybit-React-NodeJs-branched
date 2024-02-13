/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


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
          <Link to="/register">
            <button className='signup-btn'>Sign Up</button>
          </Link>
        </div>
        <div className='access-btn'>
          <Link to="/login">
            <button className='signin-btn'>Sign In</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home