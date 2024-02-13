/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './ProfileCover.css';
import { UserContext } from '../../../context/userContext';
import { FaUser } from 'react-icons/fa';



function ProfileCover({ currentLevel }) {
    const user = useContext(UserContext);
    console.log(user);
    return (
        <div className='profile-cover'>
            <section className="user-info">
                <aside className='user-profile-image'>
                    <FaUser className="User-Toggler"/>
                </aside>
                <div className='info-context'>
                {user ? (
                <React.Fragment>
                   <b className='userName'>Hi, {user.name}</b>
                   <b className='userEmail'>{user.email}</b>
                </React.Fragment>
                ) : (
                <b className='userEmail'>Loading...</b>
                )}
                </div>
            </section>
            <section className='account-context'>
                <div className='current-level'>
                    <i>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M1357 2843 c-19 -32 -87 -206 -87 -222 0 -14 7 -21 19 -21 24 0 31 11 66 95 15 39 31 74 35 78 4 4 36 -9 71 -29 35 -21 65 -39 67 -39 2 -2 -147 -354 -311 -737 l-12 -27 -63 38 c-34 21 -65 40 -67 43 -3 3 17 58 45 123 43 100 49 121 37 132 -7 8 -20 11 -28 8 -21 -8 -131 -275 -120 -289 5 -6 50 -33 100 -61 l90 -50 3 -560 3 -559 98 -58 c54 -32 105 -58 114 -58 8 0 86 41 174 91 l159 92 0 672 0 672 95 54 c72 41 95 58 94 74 0 11 -82 114 -182 229 -176 202 -185 211 -275 263 -91 52 -116 61 -125 46z m368 -358 c65 -77 125 -148 133 -157 12 -15 6 -21 -65 -61 -43 -25 -84 -51 -92 -58 -12 -11 -13 -114 -8 -676 l5 -664 -21 -13 c-31 -19 -221 -130 -228 -134 -4 -2 -6 37 -5 85 0 48 0 346 -1 661 -3 655 7 601 -100 537 -31 -19 -58 -33 -60 -32 -1 2 60 149 136 327 76 179 141 334 145 344 8 24 -1 34 161 -159z m279 309 c35 -20 64 -39 64 -44 0 -4 -68 -167 -151 -361 -83 -195 -155 -364 -159 -376 -9 -22 -10 -21 -79 20 l-69 41 22 51 c12 27 85 197 162 378 76 180 140 327 142 327 2 0 33 -16 68 -36z m266 -259 l147 -173 -87 -50 -87 -49 -3 -369 -2 -369 -93 -52 c-50 -29 -105 -62 -122 -73 l-30 -20 -5 353 c-6 405 1 384 -101 323 -33 -20 -62 -36 -64 -36 -1 0 63 155 144 345 80 189 148 344 151 344 3 0 71 -79 152 -174z m-338 -1153 c-1 -1 -27 13 -59 33 -33 19 -63 35 -67 35 -5 0 -7 111 -6 246 l3 247 60 36 60 37 5 -316 c3 -173 5 -316 4 -318z"/>
                                <path d="M2097 2355 c-97 -228 -177 -421 -177 -428 0 -7 43 -37 95 -67 l95 -55 5 -250 c3 -137 5 -253 5 -256 0 -4 47 -34 105 -67 l106 -61 157 90 c86 50 162 95 168 100 8 7 10 112 7 372 l-5 362 98 55 c63 35 99 62 99 72 0 9 -81 111 -179 227 -178 209 -179 211 -276 266 -54 30 -104 55 -112 55 -9 0 -77 -147 -191 -415z m279 309 c35 -20 64 -39 64 -44 0 -4 -68 -167 -151 -361 -83 -195 -155 -364 -159 -376 -9 -22 -10 -21 -79 20 l -69 41 22 51 c12 27 85 197 162 378 76 180 140 327 142 327 2 0 33 -16 68 -36z m266 -259 l147 -173 -87 -50 -87 -49 -3 -369 -2 -369 -93 -52 c-50 -29 -105 -62 -122 -73 l-30 -20 -5 353 c-6 405 1 384 -101 323 -33 -20 -62 -36 -64 -36 -1 0 63 155 144 345 80 189 148 344 151 344 3 0 71 -79 152 -174z m-338 -1153 c-1 -1 -27 13 -59 33 -33 19 -63 35 -67 35 -5 0 -7 111 -6 246 l3 247 60 36 60 37 5 -316 c 3 -173 5 -316 4 -318z"/>
                            </g>
                        </svg>
                        Current Level:&nbsp;
                    </i>
                    <b>{currentLevel}</b>
                </div>
            </section>
        </div>
    );
}

export default ProfileCover;
