import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/navbars/UserNavbar'
import UserFooter from '../components/footer/UserFooter'

const UserLayout = () => {
    return (
        <>
            <UserNavbar />
            <main><Outlet /></main>
            <UserFooter />
        </>
    )
}

export default UserLayout