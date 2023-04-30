import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from '../pages/first/FirstPage'
import SecondPage from '../pages/second/SecondPage'
import Home from '../pages/home/Home'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='workflow/' element={<FirstPage />} />
                <Route path='/get-start' element={<SecondPage />} />
                <Route path='/Home' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routers