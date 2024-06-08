

import { Container } from 'react-bootstrap'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { Route,Routes } from 'react-router-dom'
import FormPage from './Components/FormPage/FormPage'

function App() {


  return (
    <>
    <Container fluid className='px-0'>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/formpage' element={<FormPage/>} />
      </Routes>
    <Footer/>
    </Container>


    </>
  )
}

export default App
