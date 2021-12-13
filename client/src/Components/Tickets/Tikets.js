import React, { Component } from 'react'
import TiketItem from './TiketItem'
import './Tickets.css'

export class Tikets extends Component {
    state = {
        tickets: [
            {number: 1, name: 'Билет: 1'},
            {number: 2, name: 'Билет: 2'},
            {number: 3, name: 'Билет: 3'},
            {number: 4, name: 'Билет: 4'},
            {number: 5, name: 'Билет: 5'},
            {number: 6, name: 'Билет: 6'},
            {number: 7, name: 'Билет: 7'},
            {number: 8, name: 'Билет: 8'},
            {number: 9, name: 'Билет: 9'},
            {number: 10, name: 'Билет: 10'},
            {number: 11, name: 'Билет: 11'},
            {number: 12, name: 'Билет: 12'},
        ]
    }


    render() {
        return (
            <div className='container ticket-page'>
                {
                    this.state.tickets.map((ticket) => {
                        return <TiketItem number={ticket.number} name={ticket.name}/>
                    })
                }
            </div>
        )
    }
}

export default Tikets
