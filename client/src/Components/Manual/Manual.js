import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Manual extends Component {
    render() {
        return (
            <div className='container'>
                <div className="header"><h1>Учебник</h1></div>
                <div className="manual-item-container">
                    <div className="manual-item">
                        <Link> Дорожные знаки </Link>
                    </div>
                    <div className="manual-item">
                        <Link> Обязаности водителей </Link>
                    </div>
                    <div className="manual-item">
                        <Link> Обязаности пешеходов </Link>
                    </div>
                    <div className="manual-item">
                        <Link> Сигналы светофора и регулировщика </Link>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Manual
