import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NoResourceFound = ({ resource }) => {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <h1 className="font-bold text-6xl py-2 text-primary">
                <FontAwesomeIcon icon={faExclamationTriangle} />
            </h1>
            <p className="font-roboto text-black text-2xl font-bold text-center px-4">
                No {resource} Found.
            </p>
        </div>
    )
}

export default NoResourceFound