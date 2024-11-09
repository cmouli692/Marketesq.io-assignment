import React from 'react'
import "./PaymentPage.css"
import { LuIndianRupee } from "react-icons/lu";
import { useApiContext } from '../../components/Context/Context'

const PaymentPage = () => {

    const {roomsCount,name,phoneNumber,email,adultCount,childrenCount,checkInDate,checkOutDate,totalPrice} = useApiContext()

  return (
    <div>
        <div className='details-and-order-completed-container'>
            <div className='name-and-details-container'>
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <p>{email}</p>
                <p>{adultCount} Adults and {childrenCount} Children</p>
        
            </div>  
            <hr className='payment-page-middle-hr'/>
            <div>
                <h1>Order complete</h1>
                <p>have Questions?</p>
                <p>Contact us</p>
            </div>
        </div>
       
       <div className='check-in-check-out-and-book-add-sub-buttons-main-container'>
          <ul className='check-in-check-out-and-book-add-sub-buttons-container'>
            <li className='check-in-item-container'>
              <div>
                <p>CHECK-IN</p>
                <p>{checkInDate}</p>
              </div>
              
              <div>
                 <hr className='vertical-hr'/>
              </div>
             
            </li>
            <li className='check-in-item-container'>
              <div>
                <p>CHECK-OUT</p>
                <p>{checkOutDate}</p>
              </div>
              
              <hr className='vertical-hr'/>
            </li>
            <li className='check-in-item-container'>
              <div>
                <p>ROOMS</p>
              <div className='counter-controls-container'>
               
                <p>{roomsCount}</p>
               
                
              </div>
              </div>
              
            </li>
            <li className='check-in-item-container'>
              <button className='book-btn' type='submit' > <LuIndianRupee/>{totalPrice}</button>
            </li>
            
          </ul>
        </div>
    </div>
    
  )
}

export default PaymentPage
