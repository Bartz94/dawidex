import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './homePage/HomePage'

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
