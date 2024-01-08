import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            AdminLayout
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default AdminLayout