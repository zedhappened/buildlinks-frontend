import React from 'react'

const Card = (props) => {
    return (
        <div className={"bg-neutral border-2 p-2 m-2 rounded-lg shadow-sm " + props?.className}>
            {props.children}
        </div>
    )
}

export default Card