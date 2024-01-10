import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbars/AdminNavbar'

const AdminLayout = () => {
    return (
        <>
            <AdminNavbar />
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default AdminLayout