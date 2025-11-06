import { useState } from 'react'
import Signin from './components/Signin'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path='/' element={<SignUp/>}/>
     <Route path='/login' element={<Signin/>}/>
  </Routes>
    </>
  )
}

export default App
