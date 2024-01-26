import React from 'react'

const Checkbox = (props) => {
    return (
        <div className={"flex justify-center text-secondary gap-2 my-2 py-1 text-sm " + props.className}>
            <p className="font-bold">
                {props.label}
            </p>
            <input name={props.name} defaultChecked={props.defaultChecked} disabled={props.disabled} type='checkbox' />
        </div>

    )
}

export default Checkbox