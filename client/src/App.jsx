import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './scenes/loginPage/login'
import Home from './scenes/homePage/home'
import Profile from './scenes/profilePage/profile'

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={Login} />
            <Route path='/home' element={Home} />
            <Route path='/profile/:userId' element={Profile} />
          </Routes>
        </Router>
      </div>
  
    </>
  )
}

export default App
