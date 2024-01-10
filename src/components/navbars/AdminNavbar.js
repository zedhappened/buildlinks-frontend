import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <header className="w-full h-20 flex flex-row bg-secondary">

            <div className="basis-5/6 flex flex-row px-24 items-center text-lg text-neutral gap-x-8">
                <Link to={'/admin'} >Dashboard</Link>
                <Link to={'products'} >Products</Link>
                <Link to={'categories'} >Categories</Link>
                <Link to={'orders'} >Orders</Link>
                <Link to={'colors'} >Colors</Link>
            </div>

            <div className="basis-1/6 flex flex-row-reverse mt-2 items-center px-12 gap-x-8 text-md font-bold text-red-300" >

                <Link to={'/'} className='flex flex-row items-center gap-2 hover:text-red-400' >
                    Exit <FontAwesomeIcon icon={faRightFromBracket} />
                </Link>

                <p className='flex flex-row items-center gap-2 hover:text-red-400' >
                    Logout <FontAwesomeIcon icon={faUser} />
                </p>

            </div>



        </header>
    )
}

export default AdminNavbar