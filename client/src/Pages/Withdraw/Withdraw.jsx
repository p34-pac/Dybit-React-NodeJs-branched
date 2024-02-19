/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Withdraw.css'
import DropMenu from '../../Components/DropMenu/DropMenu'

function Withdraw() {
    const [data, setData] = useState([]);
    const [typedText, setTypedText] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [found, setFound] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.paystack.co/bank', {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer sk_test_1f61c143b70f5584eaaef33cb2c723aef7ddd5ed'
              }
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const jsonData = await response.json();
            jsonData.data.forEach(i => {
                setData(prevData => [...prevData, i.name]);
                setFilteredData(prevData => [...prevData, i.name]);
                setFound(true)

                if(typedText != ''){
                    let arr = []
                    
                    data.forEach(j => {
                        if (j.toLowerCase().includes(typedText.toLowerCase()) && !arr.includes(j)) {
                            arr.push(j);
                        }
                    });
                    setFilteredData(arr);
                    arr = []
                }
            });
          } catch (error) {
            setFound(false)
          }
        };
    

            fetchData(); // Invoke the fetch data function
            setFilteredData(data);


      }, []);

      

      function searchFilter(e){
        let val = e.target.value
        let arr = []
        setTypedText(val)
        
        data.forEach(j => {
            if (j.toLowerCase().includes(val.toLowerCase()) && !arr.includes(j)) {
                arr.push(j);
            }
        });
        setFilteredData(arr);
        arr = []
      }

      function toFind(){
            if(filteredData.length < 1){
                return (
                    <div className="not-found">
                        <i className="ICN-cancel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 512 512">

                                <g data-name="Layer 2" id="Layer_2">

                                    <g data-name="E410, Error, Media, media player, multimedia" id="E410_Error_Media_media_player_multimedia">

                                        <circle className="cls-1" cx="256" cy="256" r="246"/>

                                        <line className="cls-1" x1="371.47" x2="140.53" y1="140.53" y2="371.47"/>

                                        <line className="cls-1" x1="371.47" x2="140.53" y1="371.47" y2="140.53"/>

                                    </g>

                                </g>

                            </svg>
                        </i>
                        <b>No bank found for {`"${typedText}"`}</b>
                    </div>
                )
            }
        }
                
      
  return (
    <>
        <div className="top-section">
            <nav>
                <h1>Withdraw</h1>
                <button>History</button>
            </nav>
            <section className="prompt">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48" className="icon">
                        <path className="a" d="M37.275,32.6778V21.4705A13.2692,13.2692,0,0,0,27.08,8.569V7.5839a3.1015,3.1015,0,0,0-6.2029,0V8.58a13.2692,13.2692,0,0,0-10.1519,12.89V32.6778L6.52,36.8831v1.9422H41.48V36.883Z"/>
                        <path className="a" d="M19.3269,38.8253a4.6507,4.6507,0,0,0,9.3013.048v-.048"/>
                    </svg>
                    <i>
                    Please ensure to enter your bank information correctly in order to avoid wrong transactions!
                    </i>
                </p>

                <i className="ICN-wdraw">
                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                        <path d="M12 9C11.4477 9 11 9.44771 11 10V15.5856L9.70711 14.2928C9.3166 13.9024 8.68343 13.9024 8.29292 14.2928C7.90236 14.6834 7.90236 15.3165 8.29292 15.7071L11.292 18.7063C11.6823 19.0965 12.3149 19.0968 12.7055 18.707L15.705 15.7137C16.0955 15.3233 16.0955 14.69 15.705 14.2996C15.3145 13.909 14.6814 13.909 14.2908 14.2996L13 15.5903V10C13 9.44771 12.5523 9 12 9Z" fill="#0F0F0F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 1C22.6569 1 24 2.34315 24 4V8C24 9.65685 22.6569 11 21 11H19V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H21ZM22 8C22 8.55228 21.5523 9 21 9H19V7H20C20.5523 7 21 6.55229 21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6C3 6.55229 3.44772 7 4 7H5V9H3C2.44772 9 2 8.55228 2 8V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8ZM7 7V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V7H7Z" fill="#0F0F0F"/>
                    </svg>
                </i>
            </section>
        </div>
        <main>
            <section className="withdrawal-amount">
                <div className="section-top">
                    <b>Withdrawal Amount</b>
                    <b className='ST-blnc'>$15,000:53</b>
                </div>
                <div className="input">
                    <input type="number" placeholder='Please enter amount' />
                </div>
            </section>

            <form className="bank-info">
                <label htmlFor="bank-name">
                    <DropMenu 
                        options={filteredData}
                        defaultText="Select Your Bank"
                        selectedBg={"white"}
                        optionsDrop={"white"}
                        ariaSelect={"#9a9a9a"}
                        colorOpt={"#636363"}
                        colorSelect={"#636363"}
                        optionItem={"#f4f3f3"}
                    >
                        <div className="search">
                            <input type="search" placeholder='Search For Bank' onChange={(e) => searchFilter(e)}/>

                            {
                                found ? toFind() : <div className="not-found">
                                    <i className="ICN-cancel">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 512 512">

                                            <g data-name="Layer 2" id="Layer_2">

                                                <g data-name="E410, Error, Media, media player, multimedia" id="E410_Error_Media_media_player_multimedia">

                                                    <circle className="cls-1" cx="256" cy="256" r="246"/>

                                                    <line className="cls-1" x1="371.47" x2="140.53" y1="140.53" y2="371.47"/>

                                                    <line className="cls-1" x1="371.47" x2="140.53" y1="371.47" y2="140.53"/>

                                                </g>

                                            </g>

                                        </svg>
                                    </i>
                                    <b>Check your connection</b>
                                </div> 
                            }
                        </div>
                    </DropMenu>
                </label>
                <label htmlFor="account-number">
                    <input type="number" placeholder='Enter Account Number' id='account-number' />
                </label>
                <label htmlFor="account-name">
                    <input type="text" placeholder='Enter Account Name' id='account-name' />
                </label>

                <button>Withdraw</button>
            </form>
        </main>
    </>
  )
}

export default Withdraw

