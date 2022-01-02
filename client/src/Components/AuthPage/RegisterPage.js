import React, { Component } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Message from '../UI/Message'
import axios from 'axios'

export class RegisterPage extends Component {

    state = { 
        email: '',
        password: '',
        firstName: '',
        surname: '',
        message: '',
        status: ''
    }

    validateEmail = (email) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(email)) return false;
        return true;
    }

    validatePassword = (password) => {
        if(password.length < 6) {
            return false
        } else {
            return true
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formHandler = async (e) => {
        e.preventDefault()
        
        if(!this.validateEmail(this.state.email)) {
            this.setState({
                message: 'Некорректный email',
                status: 'message error'
            })
        }

        
        if(!this.validatePassword(this.state.password)) {
            this.setState({
                message: 'Пароль должен иметь длину больше 6 символов',
                status: ' message error'
            })
        }


        if(this.validateEmail(this.state.email) && this.validatePassword(this.state.password)) {
            const data = {
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                surname: this.state.surname

            }
            const res = await axios.post('http://localhost:5000/register',{
                data
            })

            console.log(res)
            if(res.data.status == 400) {
                this.setState({
                    message: res.data.message,
                    status: 'message error'
                })
            } else {
                this.setState({
                    email: '',
                    password: '',
                    firstName: '',
                    surname: '',
                    message: res.data.message,
                    status: 'message success'
                })

                setTimeout(() => {
                    this.props.history.push('/auth')
                }, 1000)

                
            }
            

        }


    }

    render() {
        return (
            <div className='container auth-form-container'>
                <form onSubmit={this.formHandler} className='auth-form register'>
                    <h3>Регистрация</h3>
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

                        <Input
                            type="text"
                            name="firstName"
                            id="Name"
                            value={this.state.firstName}
                            onChange={this.inputHandler}
                        />

                        <Input
                            type="text"
                            name="surname"
                            id="Surname"
                            value={this.state.surname}
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
                            text="Зарегистрироваться"
                        />
                    </div>

                </form>
                
            </div>
        )
    }
}

export default RegisterPage

