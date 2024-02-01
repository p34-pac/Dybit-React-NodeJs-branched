/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './ProfileReferenceCard.css'

function ProfileReferenceCard({children, attributeName}) {
  return (
    <div className='profile-reference-card'>
       <div className='ref-content'>
       <section className='icon'>{children}</section>
        <section className='context'>
            <b className='attribute-name'>{attributeName}</b>
        </section>
       </div>

        <i className='ICN-nxt'>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" xml:space="preserve" version="1.1" viewBox="0 0 50 50">
            <image width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAARtJREFUaEPt2iEOwkAQheG/AoOHU4CDAwCOO2MwJIBEcAMIpyBNqgim3XnzNk3Xz2S/GfWy2zCS04zEwQSpbZMlGzkDc+AIfNywEsgV2AIP4ODGlEAWwAlYA09gD7xcmymBtHeuBlMKqQYTAakCEwWxYyIhVkw0xIZRQCwYFSQdo4SkYtSQNEwGJAWTBZFjMiFSTDZEhnFAJBgXJBzjhIRi3JAWs+yS5gq4d/G5d9CcIL1H9r/gNyrvgPeQ3s6NhCFauAsSinBBwhEOiASRDZEhMiFSRBZEjsiApCDUkDSEEpKKUEHSEQqIBRENsSEiIVZEFMSOiIBUgSiFVIMohdyAzRiepy/AbAwfBoZEa1mNK+qGgyZI+EgLG34BlEB6M8VJGy0AAAAASUVORK5CYII="/>
        </svg>
        </i>
    </div>
  )
}

export default ProfileReferenceCard