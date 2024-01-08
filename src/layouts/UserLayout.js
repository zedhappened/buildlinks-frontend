import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
            userLayout
            <main><Outlet /></main>
        </>
    )
}

export default UserLayout