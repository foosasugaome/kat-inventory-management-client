import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
// import InventoryList from ".components/pages/InventoryList"
// import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout'
import Navigation from './components/layout/Navigation'
import Home from './components/pages/Home'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
