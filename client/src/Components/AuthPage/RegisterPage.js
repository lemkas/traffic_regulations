import React, { Component } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

export class RegisterPage extends Component {
    render() {
        return (
            <div className='container auth-form-container'>
                <form className='auth-form register'>
                    <h3>Регистрация</h3>
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

                        <Input
                            type="text"
                            name="firstName"
                            id="Name"
                        />

                        <Input
                            type="text"
                            name="lastName"
                            id="Surname"
                        />
                    </div>

                    <div className="button-container">
                        <Button
                            type="submit"
                            text="Зарегистрироваться"
                        />
                    </div>

                </form>
                
            </div>
        )
    }
}

export default RegisterPage

