import React, { Component } from 'react'

import api from '../../services/api'

import './index.scss';

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],

      email: '',
      username: '',
      fullname: '',
      password: '',
      avatar: '',
      role: ''
    }

    this.handleUserCreate = this.handleUserCreate.bind(this)
  }

  async componentDidMount() {
    const users = await api.get('/users')

    if (users.length > 0) {
      this.setState({users})
    }
  }

  async handleUserCreate(e) {
    e.preventDefault()
    const { email, username, fullname, password, avatar, role } = this.state
    const user = {
      email,
      username,
      fullname,
      password,
      avatar,
      role
    }
    const res = await api.post('/users', user)
    console.log(res)
  }

  render() {
    return (
      <div className='row'>
        <div className='col-5 offset-1'>
        </div>
        <div className="col-4 offset-1">
          <h5 className='card-title mb-2'>Create a new user</h5>
          <hr />
          <form onSubmit={this.handleUserCreate}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' className='form-control' placeholder='' onChange={e => this.setState({email: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username' className='form-control' placeholder='' onChange={e => this.setState({username: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='fullname'>Full name</label>
              <input type='text' name='fullname' id='fullname' className='form-control' placeholder='' onChange={e => this.setState({fullname: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='userpassword'>Password</label>
              <input type='password' name='userpassword' id='userpassword' className='form-control' onChange={e => this.setState({password: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='confirmpassword'>Confirm password</label>
              <input type='password' name='confirmpassword' id='confirmpassword' className='form-control' onChange={e => this.setState({confirmPassword: e.target.value})} />
            </div>
            <div className='form-group'>
              <label htmlFor='photo'>Avatar</label>
              <div className='custom-file'>
                <input type='file' className='custom-file-input' id='photo' name='photo' onChange={e => this.setState({avatar: e.target.value})} />
                <label className='custom-file-label' htmlFor='photo'>Choose file</label>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='role'>Role</label>
              <select className='form-control' id='role' onChange={e => this.setState({role: e.target.value})}>
                <option value='1'>Admin</option>
                <option value='2'>Editor</option>
                <option value='3'>Registered</option>
              </select>
            </div>
            <button className='btn btn-primary'>Create user</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Users