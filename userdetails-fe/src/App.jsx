import './App.css'
import FooterComponents from './components/FooterComponents'
import HeaderComponents from './components/HeaderComponents'
import UserDetailsComponents from './components/UserDetailsComponents'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UsersComponents from './components/UsersComponents'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponents />
        <Routes>
        {/* //http://localhost:3000 */}
          <Route path='/' element = { <UserDetailsComponents />}></Route>
          {/* //http://localhost:3000/users */}
          <Route path='/users' element = { <UserDetailsComponents /> }></Route>
          {/* //http://localhost:3000/add-user */}
          <Route path='/add-user' element = {<UsersComponents />}></Route>
          {/* //http://localhost:3000/edit-user/1 */}
          <Route path='/edit-employee/:id' element = {<UsersComponents />} ></Route>
        </Routes>
      <FooterComponents />
    </BrowserRouter>  
    </>
  )
}

export default App
