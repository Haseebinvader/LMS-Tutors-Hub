import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Courses' element={<Courses />} />
            <Route path='/Teachers' element={<Teachers />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
