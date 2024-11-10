import {  createContext, useContext, useState } from "react";


// context created 
const ApiContext = createContext(null)


// provider component 
export const ApiProvider = ({children}) => {
    const [checkInDate,setCheckInDate] = useState("2024-12-25")
    const [checkOutDate,setCheckOutDate] = useState("2024-12-29")
    const [roomsCount , setRoomsCount] = useState(0) 
  
    const onChangeCheckInValue  = (event) => {
        console.log(event.target.value)
      setCheckInDate(event.target.value)
    }
  
    const onChangeCheckOutValue  = (event) => {
      setCheckOutDate(event.target.value)
  
    }
  
    const onClickMinusBtn = () => {
      if(roomsCount > 0){
        setRoomsCount((prevCount) => (prevCount - 1 ))
      }
      
    
  
    }
  
    const onClickPlusBtn  = () =>{
      setRoomsCount((prevCount) => (prevCount+1))
    }


    // booking page logics

    const [name,setName] = useState("")
    const [phoneNumber ,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [adultCount,setAdultCount] = useState(2)
    const [childrenCount,setChildrenCount] = useState(2)
  
    const onChangeName = (event) => {
  
      setName(event.target.value)
  
    }
  
    const onChangePhoneNumber  = (event) => {
      setPhoneNumber(event.target.value)
    }
  
    const onChangeEmail = (event) => {
      setEmail(event.target.value)
      
    }
  
    const onChangeAdultCount  = (event) => {
      setAdultCount(event.target.value)
  
    }
  
    const onChangeChildrenCount = (event) => {
      setChildrenCount(event.target.value)
      
  
    }

    // total price of room logic

    const adultPrice = 1000
    const totalAdultPrice = adultPrice * adultCount
    const childrenPrice = 500 
    const totalChildrenPrice = childrenPrice * childrenCount

    const totalPrice = ( totalAdultPrice + totalChildrenPrice ) * roomsCount


    return(
        <ApiContext.Provider value={{checkInDate,
        setCheckInDate,
        checkOutDate,
        setCheckOutDate,
        roomsCount,
        setRoomsCount,
        onChangeCheckInValue,
        onChangeCheckOutValue,
        onClickMinusBtn,
        onClickPlusBtn,
        name,
        setName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        adultCount,
        setAdultCount,
        childrenCount,
        setChildrenCount,
        onChangeName,
        onChangeAdultCount,
        onChangeChildrenCount,
        onChangeEmail,
        onChangePhoneNumber,
        totalPrice
         

        }}>
            {children}
        </ApiContext.Provider>
    )
}

// custom hook to access context 

export const useApiContext = () => useContext(ApiContext)