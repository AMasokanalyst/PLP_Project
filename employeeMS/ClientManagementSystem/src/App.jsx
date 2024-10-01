
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/dashboard'
import Home from './Components/home'
import Clients from './Components/Clients'
import Bookings from './Components/Bookings'
import Profile from './Components/Profile'
import BookSlot from './Components/BookSlot'
import UpdateBookings from './Components/UpdateBookings'
import Register from './Components/register'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/dashboard/clients' element={<Clients/>}></Route>
        <Route path='/dashboard/bookings' element={<Bookings/>}></Route>
        <Route path='/dashboard/profile' element={<Profile/>}></Route>
        <Route path='/dashboard/book_slot' element={<BookSlot/>}></Route>
        <Route path='/dashboard/update_bookings' element={<UpdateBookings/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
