import React from 'react'
import '../../App.css'

export default function PopUp(props) {
    return (
        <div className='pop-up'>
            <p>{props.message}</p>
        </div>
    )
}
