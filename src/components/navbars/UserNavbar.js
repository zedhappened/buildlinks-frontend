import { faCartShopping, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    return (
        <header className="w-full h-20 flex flex-row bg-secondary mb-10">
            <div className="basis-1/5 flex mt-2 justify-center" >
                <Link to='/'>
                    <img className="rounded-t-2xl" src='https://placehold.co/150x110' alt='logo' />
                </Link>
            </div>

            <div className="basis-4/5 flex-col hidden lg:flex">

                <div className="basis-1/4 flex flex-row-reverse py-1 text-sm">

                    <div className='flex flex-row gap-x-4 px-8'>
                        <Link to={'/sign-in'} className="text-red-300 hover:underline">Login</Link>
                        <Link to={'/sign-in?create=true'} className="text-red-300 hover:underline">Register</Link>
                        <Link to={'/about-us'} className=" text-stone-400 hover:underline">About us</Link>
                        <Link to={'/admin'} className=" text-stone-400 hover:underline">Admin Panel</Link>
                    </div>

                    <div className='flex flex-row gap-x-4 border-r-2 border-stone-800 text-stone-400 px-4'>
                        <Link className='hover:underline' to={'mailto:info@buildlinks.com'}><FontAwesomeIcon icon={faEnvelope} /> info@buildlinks.com</Link>
                        <Link className='hover:underline' to={'tel:00000000'}><FontAwesomeIcon icon={faPhone} /> 06-748-3500</Link>
                    </div>

                </div>

                <div className="basis-3/4 flex flex-row-reverse px-8 items-center">

                    <Link to={'/cart'} className="text-accent"><FontAwesomeIcon icon={faCartShopping} /> Cart</Link>

                </div>
            </div>

        </header>
    )
}

export default UserNavbar