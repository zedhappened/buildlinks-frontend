import React from 'react'

const Input = (props) => {
    return (
        <input name={props.name} type={props.type ?? 'input'} className='my-2 border border-secondary rounded-sm shadow-inner px-3 py-2 text-sm' placeholder={props.placeholder} />
    )
}

export default Input