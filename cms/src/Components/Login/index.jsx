import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import api from '../../services/api'

import './index.scss';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: false,
      success: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  async handleLogin(e) {
    e.preventDefault()
    this.setState({error: false})

    try {
      const loginResult = await api.post('/sessions', { email: this.state.email, password: this.state.password })
      localStorage.setItem('token', loginResult.data.token)
      return this.setState({success: true})
    } catch(err) {
      this.setState({error: true})
      return err
    }
  }
  
  render() {
    return (
      <div className='login' style={{ width: '100%', height: '100vh', backgroundColor: '#f5f5fb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 55 }}>
        <div className='login__box'>
          {this.state.success ? <Redirect to='dashboard' /> : null}
          <h1>Welcome</h1>
          <p>Hello. Login and start managing your app content here.</p>
          {this.state.error ? <p className='alert alert-danger' role='alert'>Login credentials are invalid. Please try again.</p> : null}
          <form onSubmit={this.handleLogin}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' className='form-control' placeholder='' onChange={ e => this.setState({email: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' className='form-control' placeholder='' onChange={ e=> this.setState({password: e.target.value})} />
            </div>
            <button className='btn btn-primary btn-block login__submit'>Login</button>
            <hr/>
            <button className='login__forgot'>Do not remember your password?</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login
