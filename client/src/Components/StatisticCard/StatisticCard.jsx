/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './statisticCard.css'

function StatisticCard({children, attributeValue, attributeName}) {
  return (
    <div className='statistic-card'>
        <section className='icon'>{children}</section>
        <section className='context'>
            <b className='attribute-value'>{attributeValue}</b>
            <b className='attribute-name'>{attributeName}</b>
        </section>

    </div>
  )
}

export default StatisticCard