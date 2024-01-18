import React from 'react'

const Input = (props) => {
    return (
        <input value={props.value} onChange={props.onChange} name={props.name} type={props.type ?? 'text'} className={'my-2 border bg-white border-secondary rounded-sm shadow-inner px-3 py-2 text-sm' + (props?.type === "file" ? " max-sm:w-52 " : " ") + (props.className)} placeholder={props.placeholder} />
    )
}

export default Input