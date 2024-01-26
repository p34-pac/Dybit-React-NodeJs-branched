import React from 'react'
import './Dashboard.css'
import Navbar from '../../Components/NavBar/Navbar'
import BottomNavbar from '../../Components/BottomNavbar/BottomNavbar'
import HeroCards from '../../Components/HeroCards/HeroCards'
import PriceListStatic from '../../Components/PriceListStatic/PriceListStatic'


function Dashboard() {
  return (
  <div className='Dashboard'>
      <Navbar />
      <section className='Hero-section md:flex'>
        <HeroCards />
      </section>
      <section className='Price-list'>
        <h2 className='Price-Details'>Grade List</h2>
         <PriceListStatic/>
      </section>
      <div className='EmptyFooterDiv'>00</div>
      <footer>
        <BottomNavbar/>
      </footer>
  </div>
  )
}

export default Dashboard