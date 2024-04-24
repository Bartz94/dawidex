import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './homePage/HomePage'
import { Gallery } from './gallery/Gallery'
import { Contact } from './contact/Contact'

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}
