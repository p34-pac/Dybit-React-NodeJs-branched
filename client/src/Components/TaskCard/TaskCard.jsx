/* eslint-disable no-unused-vars */
import React from 'react'
import './TaskCard.css'
import taskImg from '../../assets/Images/bin.png'

function TaskCard() {
  return (
    <div className='task-card'>
        <section className='upper-section'>
            <aside className='task-img'>
                <div className='img-box'>
                    <img src={taskImg} alt='task image icon'/>
                </div>
                <div className='level'>Level 0 user</div>
            </aside>
            <main className='section-context'>
                <div className='task-types'>
                    <b className='server-type'>Cloud Server -- 0</b>
                    <b className='level-type'>Run Level-1 tasks to earn 3% daily</b>
                </div>
                <div className='price-interest'>
                    <b className='price'>₦12,000 <span className='price-task-cta'>start</span></b>
                    <b className='interest-rate'>2.50</b>
                </div>
            </main>
        </section>
        <section className='lower-section'>
            <b className='timing'>Worker Time: &nbsp;
                <span className='begin'>8:00</span>
                <span className='end'>24:00</span>
            </b>
            <div className='start-worker'>
                <i className='ICN-stwk'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M120 635 c0 -2 19 -14 43 -26 60 -31 155 -108 153 -124 -1 -7 -29 -47 -61 -89 -47 -60 -67 -77 -93 -82 -33 -7 -92 -58 -92 -81 0 -21 17 -15 42 15 13 15 31 31 41 35 10 4 -10 -28 -44 -71 -88 -108 -83 -102 -72 -113 7 -7 19 2 37 26 31 40 67 51 42 12 -17 -27 -28 -95 -16 -102 12 -7 22 11 24 44 1 18 43 78 125 180 114 141 123 156 111 175 -13 21 -12 21 8 3 11 -10 23 -14 26 -9 6 11 69 -40 139 -113 35 -36 47 -44 47 -30 0 43 -126 195 -150 180 -6 -4 -7 2 -3 12 7 20 41 53 55 53 4 0 8 6 8 14 0 19 -49 8 -63 -15 -8 -13 -15 -15 -24 -7 -10 8 -6 16 18 38 18 15 29 32 25 39 -13 21 -35 11 -52 -24 -19 -41 -34 -43 -77 -11 -46 35 -137 76 -169 76 -16 0 -28 -2 -28 -5z"/>
                            <path d="M281 247 c-85 -43 -91 -177 -10 -226 45 -28 225 -30 232 -3 4 16 5 16 6 0 1 -25 58 -25 64 0 4 16 5 16 6 0 1 -13 10 -18 31 -18 27 0 30 3 30 31 l0 30 -94 -3 c-86 -3 -93 -1 -85 14 14 25 11 31 -11 25 -11 -3 -18 -1 -14 4 3 5 14 9 25 9 12 0 19 7 19 20 0 12 -7 20 -17 20 -15 0 -15 2 -4 9 12 8 13 14 3 35 -25 55 -122 84 -181 53z"/>
                        </g>
                    </svg>
                </i>
                <button className='start-worker-btn'>Start Worker</button>
            </div>
        </section>
    </div>
  )
}

export default TaskCard