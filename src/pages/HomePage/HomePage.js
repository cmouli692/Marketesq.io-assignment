import React, { useContext, useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import "./HomePage.css"
import Discover from '../../components/Discover/Discover';
import Services from '../../components/Services/Services';
import { useNavigate } from 'react-router-dom';
import { useApiContext } from '../../components/Context/Context';

const HomePage = () => {

  const navigate = useNavigate()

  const {checkInDate,checkOutDate,onChangeCheckInValue,onChangeCheckOutValue,roomsCount,onClickMinusBtn,onClickPlusBtn} = useApiContext()

  // const [checkInDate,setCheckInDate] = useState("")
  // const [checkOutDate,setCheckOutDate] = useState("")
  // const [roomsCount , setRoomsCount] = useState(0)

  // const onChangeCheckInDate  = (event) => {
  //   setCheckInDate(event.target.value)
  // }

  // const onChangeCheckOutValue  = (event) => {
  //   setCheckOutDate(event.target.value)

  // }

  // const onClickMinusBtn = () => {
  //   if(roomsCount > 0){
  //     setRoomsCount((prevCount) => (prevCount - 1 ))
  //   }
    
  

  // }

  // const onClickPulsBtn  = () =>{
  //   setRoomsCount((prevCount) => (prevCount+1))
  // }

  const onClickBookBtn = () => {
    navigate("/booking")
    
  }

  return (
    <div className='home-page-container'>

      <div className='text-nature-img-and-booking-controls-container'>
        <div className='text-and-icons-container'>
          <div className='heading-and-text-container'>
            <h1>Work from ladakh</h1>
            <p>India's first true digital tourism ecosystem</p>
            <div>
              <FaFacebook/>
              <AiFillInstagram/>
            </div>

          </div>
          <div className='nature-image-container'>
            {/* <img src='https://c4.wallpaperflare.com/wallpaper/61/316/24/clouds-lake-rain-india-wallpaper-preview.jpg' className='ladahk-img'/> */}
            <h1>{}</h1>

          </div>
        </div>

        <div className='check-in-check-out-and-book-add-sub-buttons-main-container'>
          <ul className='check-in-check-out-and-book-add-sub-buttons-container'>
            <li className='check-in-item-container'>
              <div>
                <p>CHECK-IN</p>
                <input onChange={onChangeCheckInValue} name='checkInDate' value={checkInDate} type='date' required/>
              </div>
              
              <div>
                 <hr className='vertical-hr'/>
              </div>
             
            </li>
            <li className='check-in-item-container'>
              <div>
                <p>CHECK-OUT</p>
                <input onChange={onChangeCheckOutValue} name='checkOutDate' value={checkOutDate} type='date' required/>
              </div>
              
              <hr className='vertical-hr'/>
            </li>
            <li className='check-in-item-container'>
              <div>
                <p>ROOMS</p>
              <div className='counter-controls-container'>
                <button onClick={onClickMinusBtn} className='plus-and-minus-btn'>-</button>
                <p>{roomsCount}</p>
                <button onClick={onClickPlusBtn} className='plus-and-minus-btn'>+</button>
                
              </div>
              </div>
              
            </li>
            <li className='check-in-item-container'>
              <button className='book-btn' onClick={onClickBookBtn}>BOOK</button>
            </li>
            
          </ul>
        </div>
       

      </div>
      <div id='discover'>
        <Discover/>
      </div>
      <div id='services'>
      <Services/>
      </div>
      
      
      
      
      
    </div>
  )
}

export default HomePage
