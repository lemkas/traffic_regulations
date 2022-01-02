import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import RegisterPage from '../AuthPage/RegisterPage'
import HomePage from '../HomePage/HomePage'
import Manual from '../Manual/Manual'
import Tikets from '../Tickets/Tikets'
import logo from './logo.png'

import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <header>
            <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
            <nav>
                <ul className='nav-links'>
                    <li><Link to="/manual">Учебник</Link></li>
                    <li><Link to="/tickets">Билеты</Link></li>
                    <li><Link to="#">Экзамен</Link></li>
                    <li><Link className="auth" to="/auth">Вход</Link></li>
                </ul>
            </nav>
            
            </header>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path="/tickets" component={Tikets} />
                <Route path="/auth" component={AuthPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/manual" component={Manual} />
                

            </Switch>
        </>
    )
}
