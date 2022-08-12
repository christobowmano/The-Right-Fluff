import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './comp/important/Header'
import Footer from './comp/important/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'

import img1 from './assets/img/img1.png'
import img2 from './assets/img/img2.png'
import img3 from './assets/img/img3.png'
import img4 from './assets/img/img4.png'
import img5 from './assets/img/img5.png'
import img6 from './assets/img/img6.png'

function App() {
    const imgs = [img1, img2, img3, img4, img5, img6];
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home images={imgs}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
