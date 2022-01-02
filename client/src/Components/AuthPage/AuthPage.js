import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from '../UI/Input'
import Button from '../UI/Button'
import './AuthPage.css'
import axios from 'axios'
import Message from '../UI/Message'
import PopUp from '../UI/PopUp'

export class AuthPage extends Component {
    state = {
        email: '',
        password: '',
        message: '',
        status: ''
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    formHandler = async (e) => {
        e.preventDefault()

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        const res = await axios.post('http://localhost:5000/login', {
            data
        })
        console.log(res)

        if(res.data.status == 400) {
            this.setState({
                email: '',
                password: '',
                message: res.data.message,
                status: 'message error'
            })
        } else {
            this.setState({
                email: '',
                password: '',
                message: res.data.message,
                status: 'message success'
            })

            setTimeout(() => {
                this.props.history.push('/')
            }, 1000)

            
        }


    }


    render() {
        return (
            <div className='container auth-form-container'>
                <form onSubmit={this.formHandler} className='auth-form'>
                    <h3>Вход</h3>
                    <div className="input-container">
                        <Input
                            type="text"
                            name="email"
                            id="Email"
                            value={this.state.email}
                            onChange={this.inputHandler}
                        />
                        <Input
                            type="password"
                            name="password"
                            id="Password"
                            value={this.state.password}
                            onChange={this.inputHandler}
                        />
                        
                        
                    </div>
                        {
                            this.state.message 
                                ? <Message message={this.state.message} status={this.state.status} />
                                : null
                        }
                    <div className="button-container">
                        <Button 
                            type="submit"
                            text="Войти"
                        />
                        <p>Нет аккаунта? <Link to="register" style={{color: 'navy'}}>Зарегистрируйся!</Link></p>
                        
                    </div>
                </form>
                
            </div>
        )
    }
}

export default AuthPage
