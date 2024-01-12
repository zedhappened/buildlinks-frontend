import { faBagShopping, faBoxOpen, faGear, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = ({ show }) => {
    return (
        <div className={'absolute z-10 top-20 left-0 bottom-0 bg-secondaryHover border-r-2 shadow-inner w-0 md:w-64 transition-all duration-400 delay-200' + (show ? " !w-64" : "")}>
            <nav className={'flex flex-col gap-3 text-lg font-semibold p-4 text-secondary invisible md:visible delay-0' + (show ? " !visible !delay-300" : "")}>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "nav-link-pending" : isActive ? "nav-link-active" : "nav-link"
                } to={'orders'} >
                    <p className='basis-5/6'>Orders</p>
                    <FontAwesomeIcon className='basis-1/6' icon={faBoxOpen} />
                </NavLink>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "nav-link-pending" : isActive ? "nav-link-active" : "nav-link"
                } to={'products'} >
                    <p className='basis-5/6'>Products</p>
                    <FontAwesomeIcon className='basis-1/6' icon={faBagShopping} />
                </NavLink>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "nav-link-pending" : isActive ? "nav-link-active" : "nav-link"
                } to={'categories'} >
                    <p className='basis-5/6'>Categories</p>
                    <FontAwesomeIcon className='basis-1/6' icon={faList} />
                </NavLink>

                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "nav-link-pending" : isActive ? "nav-link-active" : "nav-link"
                } to={'settings'} >
                    <p className='basis-5/6'>Settings</p>
                    <FontAwesomeIcon className='basis-1/6' icon={faGear} />
                </NavLink>

            </nav>
        </div>
    )
}

export default AdminSidebar