/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import BottomNavBar from '../../Components/BottomNavbar/BottomNavbar'
import './Tasks.css'
import TaskCard from '../../Components/TaskCard/TaskCard'

function Tasks() {
  return (
    <div className='tasks'>
        <Navbar />
        <section className='tasks-list'>
            <TaskCard />
            {/* these extra task cards can be removed too */}
            <TaskCard />
            <TaskCard />
            {/* -------------- */}
        </section>
        <BottomNavBar />
    </div>
  )
}

export default Tasks