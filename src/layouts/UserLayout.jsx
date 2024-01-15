import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/navbars/UserNavbar'
import UserFooter from '../components/footer/UserFooter'

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLayout = () => {
    return (
        <>
            <UserNavbar />
            <main><Outlet /></main>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <UserFooter />

        </>
    )
}

export default UserLayout