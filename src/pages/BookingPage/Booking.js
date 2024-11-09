import React, { useState } from 'react'
import "./Booking.css"
import { LuIndianRupee } from "react-icons/lu";
import { useApiContext } from '../../components/Context/Context'
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate()

  const{name,phoneNumber,email,adultCount,childrenCount,roomsCount,onChangeCheckInValue,onChangeCheckOutValue,checkInDate,checkOutDate,onChangeName,onChangeEmail,onChangePhoneNumber,onChangeAdultCount,onChangeChildrenCount,onClickMinusBtn,onClickPlusBtn,totalPrice} = useApiContext()

  // const [name,setName] = useState("")
  // const [phoneNumber ,setPhoneNumber] = useState("")
  // const [email,setEmail] = useState("")
  // const [adultCount,setAdultCount] = useState(0)
  // const [childrenCount,setChildrenCount] = useState(0)

  // const onChangeName = (event) => {

  //   setName(event.target.value)

  // }

  // const onChangePhoneNumber  = (event) => {
  //   setPhoneNumber(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
    
  // }

  // const onChangeAdultCount  = (event) => {
  //   setAdultCount(event.target.value)

  // }

  // const onChangeChildrenCount = (event) => {
  //   setChildrenCount(event.target.value)
    

  // }
  // const adultPrice = 1000
  // const totalAdultPrice = adultPrice * adultCount
  // const childrenPrice = 500 
  // const totalChildrenPrice = childrenPrice * childrenCount

  // const totalPrice = ( totalAdultPrice + totalChildrenPrice ) * roomsCount

  const onSubmitBookingPage  = (event) =>{
    event.preventDefault()
    navigate("/payment")


  }

  return (
    <form className='booking-page-main-container' onSubmit={onSubmitBookingPage}>
      <div className='input-details-container'>
        <div className='name-phone-number-container'>
          <input type='text' onChange={onChangeName} placeholder='NAME' className='name-input-element'  required/>
          <br/>
          <input type='text' onChange={onChangePhoneNumber}  placeholder='PHONE NUMBER' className='name-input-element' required/>
        </div>
        
        <div className='email-and-number-of-adults-and-children-container'>
          <input onChange={onChangeEmail} type='text' placeholder='EMAIL' className='name-input-element' />
          <div>
            <input onChange={onChangeAdultCount} type='number' min={0} placeholder='NUMBER OF ADULTS' value={adultCount} className='number-of-adults-input-element' required/>
            <input onChange={onChangeChildrenCount} type='number' min={0} placeholder='NUMBER OF CHILDREN' value={childrenCount} className='number-of-adults-input-element' required/>
          </div>
        </div>
        
      </div>
      <div className='check-in-check-out-and-book-add-sub-buttons-main-container'>
          <ul className='check-in-check-out-and-book-add-sub-buttons-container'>
            <li className='check-in-item-container'>
              <div>
                <p>CHECK-IN</p>
                <input onChange={onChangeCheckInValue}  value={checkInDate}  type='date' required/>
              </div>
              
              <div>
                 <hr className='vertical-hr'/>
              </div>
             
            </li>
            <li className='check-in-item-container'>
              <div>
                <p>CHECK-OUT</p>
                <input onChange={onChangeCheckOutValue} value={checkOutDate} name='checkOutDate' type='date' required/>
              </div>
              
              <hr className='vertical-hr'/>
            </li>
            <li className='check-in-item-container'>
              <div>
                <p>ROOMS</p>
              <div className='counter-controls-container'>
                <button onClick={onClickMinusBtn} >-</button>
                <p>{roomsCount}</p>
                <button onClick={onClickPlusBtn} >+</button>
                
              </div>
              </div>
              
            </li>
            <li className='check-in-item-container'>
              <button className='book-btn' type='submit' > <LuIndianRupee/>{totalPrice}</button>
            </li>
            
          </ul>
        </div>
      
    </form>
  )
}

export default Booking
