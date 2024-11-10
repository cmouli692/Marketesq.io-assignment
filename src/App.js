import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import Services from './components/Services/Services';
import Booking from './pages/BookingPage/Booking';
import HomePage from './pages/HomePage/HomePage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

import {ApiProvider} from "./components/Context/Context.js"
import {BrowserRouter,Routes,Route } from "react-router-dom"


function App() {
  return (
    <ApiProvider>
  
  <div>

      <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/booking" element= {<Booking/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
          
        </Routes>
         
      </BrowserRouter>

      
      {/* <Services/> */}
     
    {/* <OverlappingContainers/> */}
    
      
    </div>
    <Footer/>
  </div>
  </ApiProvider>
    
      
 
    
  );
}

export default App;
