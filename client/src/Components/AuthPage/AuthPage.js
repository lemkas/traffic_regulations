import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from '../UI/Input'
import Button from '../UI/Button'
import './AuthPage.css'

export class AuthPage extends Component {
    render() {
        return (
            <div className='container auth-form-container'>
                <form className='auth-form'>
                    <h3>Вход</h3>
                    <div className="input-container">
                        <Input
                            type="text"
                            name="email"
                            id="Email"
                        />
                        <Input
                            type="password"
                            name="password"
                            id="Password"
                        />
                        
                    </div>
                    <div className="button-container">
                        <Button 
                            type="submit"
                            text="Войти"
                        />
                        <p>Нет аккаунта? <Link to="register" style={{color: 'navy'}}>Зарегистрируйся</Link></p>
                        
                    </div>
                </form>
                
            </div>
        )
    }
}

export default AuthPage
