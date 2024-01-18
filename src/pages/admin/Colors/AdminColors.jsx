import React from 'react'
import SearchBox from '../../../components/input/SearchBox'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AdminColors = () => {
    return (
        <>
            <div className='flex h-24 justify-center items-center'>
                <p className='text-3xl md:text-4xl font-alfaSlabOne text-primary'>Product Colors</p>
            </div>
            <div className="flex flex-row px-2 md:px-8 gap-2 md:gap-4 lg:gap-8 border-y-2 bg-neutral">
                <SearchBox className="basis-4/5" />
                <Link className='basis-1/5 flex' to={'create'}>
                    <Button className="hidden md:block btn-primary flex-1">Add Color</Button>
                    <Button className="md:hidden btn-primary flex-1"><FontAwesomeIcon icon={faPlus} /></Button>
                </Link>
            </div>

        </>
    )
}

export default AdminColors