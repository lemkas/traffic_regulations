import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import RegisterPage from '../AuthPage/RegisterPage'
import HomePage from '../HomePage/HomePage'
import Tikets from '../Tickets/Tikets'

import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <header>
            <Link to='/'><h2 className="logo">ПДД</h2></Link>
            <nav>
                <ul className='nav-links'>
                    <li><Link to="#">Учебник</Link></li>
                    <li><Link to="/tickets">Билеты</Link></li>
                    <li><Link to="#">Экзамен</Link></li>
                    <li><Link class="auth" to="/auth">Вход</Link></li>
                </ul>
            </nav>
            
            </header>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path="/tickets" component={Tikets} />
                <Route path="/auth" component={AuthPage} />
                <Route path="/register" component={RegisterPage} />

            </Switch>
        </>
    )
}
