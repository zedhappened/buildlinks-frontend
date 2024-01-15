import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RestrictedComponent = (props) => {
    const user = useSelector(state => state.user)
    return (
        <>
            {
                user?.roles?.includes(props.role)
                    ? (<>{props.children}</>)
                    : (<><Navigate to={'/sign-in'} /></>)
            }
        </>
    )
}

export default RestrictedComponent