/* eslint-disable no-unused-vars */
import React from "react";
import './ReferralsPage.css'
import Navbar from "../../Components/NavBar/Navbar";
import BottomNavBar from "../../Components/BottomNavbar/BottomNavbar";
import { useState } from "react";
import { json } from "react-router-dom";

function ReferralsPage() {
  const [refL] = useState("https://users-referral-link")

  // the state above can be changed to the user's referral link

  function copyToClip(textToCopy){
    navigator.clipboard.writeText(textToCopy)
    .then(()=>{
      navigator.clipboard.readText()
      .then(txt => {
        alert("copied:" + txt)
      })
    })
  }
  return (
    <>
      <Navbar />
      <section className="referral-link">
        <i className="ICN-ref">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="64.000000pt"
            height="64.000000pt"
            viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path d="M485 618 c-15 -14 -30 -41 -36 -66 -9 -41 -8 -46 21 -75 l30 -31 -25 -13 c-21 -12 -25 -21 -25 -58 l0 -45 90 0 90 0 0 33 c0 36 -24 77 -45 77 -8 0 -2 13 16 33 27 28 30 37 26 77 -9 80 -85 116 -142 68z m50 -78 c58 0 85 -7 85 -21 0 -5 -12 -23 -27 -39 -36 -41 -79 -41 -116 1 -28 32 -34 49 -17 49 6 0 10 8 11 18 0 10 3 12 6 5 3 -8 25 -13 58 -13z m42 -109 c22 -2 43 -32 43 -62 l0 -29 -80 0 -80 0 0 39 c0 34 4 41 28 49 15 5 38 8 52 7 14 -2 30 -3 37 -4z"></path>
              <path d="M490 515 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0 -10 -7 -10 -15z"></path>
              <path d="M565 521 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z"></path>
              <path d="M520 478 c0 -4 7 -8 15 -8 8 0 15 4 15 8 0 5 -7 9 -15 9 -8 0 -15 -4 -15 -9z"></path>
              <path d="M48 487 c-21 -18 -27 -33 -32 -82 -5 -58 -5 -61 29 -95 40 -39 43 -50 16 -50 -29 0 -51 -38 -51 -87 l0 -43 115 0 115 0 0 43 c0 49 -22 87 -51 87 -27 0 -24 11 16 50 34 35 34 36 28 100 -8 87 -20 100 -97 100 -49 0 -66 -5 -88 -23z m16 -89 c7 -7 11 -20 8 -30 -2 -10 1 -18 7 -18 6 0 11 7 11 15 0 10 11 15 35 15 24 0 35 -5 35 -15 0 -8 5 -15 10 -15 6 0 10 7 10 15 0 9 9 15 25 15 28 0 35 -27 10 -36 -8 -4 -15 -12 -15 -20 0 -20 -41 -44 -75 -44 -34 0 -75 24 -75 44 0 8 -7 16 -15 20 -17 6 -21 36 -5 36 6 0 10 7 10 15 0 18 7 19 24 3z m91 -154 c0 -21 -41 -32 -57 -16 -18 18 -2 38 28 37 21 -1 29 -7 29 -21z"></path>
              <path d="M118 313 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"></path>
              <path d="M390 430 c0 -6 -36 -33 -80 -61 -44 -28 -80 -52 -80 -54 0 -1 36 -26 80 -55 44 -29 80 -56 80 -61 0 -5 9 -9 20 -9 13 0 18 5 14 15 -4 8 -10 15 -15 15 -9 0 -149 90 -149 96 0 7 131 84 144 84 15 0 28 24 19 34 -10 10 -33 7 -33 -4z"></path>
              <path d="M462 288 c-6 -13 -13 -41 -16 -63 -5 -36 -2 -45 24 -74 17 -18 30 -34 30 -36 0 -2 -10 -5 -22 -7 -20 -3 -23 -10 -26 -56 l-3 -53 88 3 88 3 3 32 c4 40 -12 71 -38 75 -19 3 -19 5 10 36 23 26 30 42 30 75 0 69 -20 87 -94 87 -55 0 -64 -3 -74 -22z m70 -78 c29 0 36 -3 32 -15 -4 -8 -1 -15 5 -15 6 0 11 7 11 15 0 8 9 15 20 15 11 0 20 -5 20 -11 0 -17 -66 -79 -85 -79 -9 0 -31 16 -51 35 -30 30 -33 37 -22 55 8 13 16 16 22 10 6 -6 27 -10 48 -10z m81 -123 c4 -7 6 -25 5 -42 l-3 -30 -78 -3 -78 -3 3 43 c2 35 7 43 28 49 33 10 113 0 123 -14z"></path>
              <path d="M490 190 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"></path>
              <path d="M528 153 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"></path>
            </g>
          </svg>
        </i>
        <div className="copy-sect">
          <span
           className="link-txt myRefL"
           id="RefL"
           >{refL}</span>

          <button className="copy-link" onClick={()=>copyToClip(refL)}>copy link</button>

        </div>
      </section>
      <main className="refDetails">
        
        <div className="members-tbl">
          <div className="heading">
            <h1>Members</h1>
            <span className="bf-total-Ref">2</span>
          </div>
          <table className="members-tbl-grid">
            <thead>
              <tr>
                <th>Member</th>
                <th>interest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="member-prof-img">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="User-Toggler" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  </span>
                  Useridentification
                </td>
                <td>2.5%</td>
              </tr>
              <tr>
                <td>
                  <span className="member-prof-img"></span>
                  Useridentification
                </td>
                <td>2.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}

export default ReferralsPage;
