import React from 'react'
import './Input.css'

export default function Input(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.id}</label>
            <input 
                className={props.className} 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                id={props.value}
                onChange={props.onChange}
                required
            />

        </>
    )
}
