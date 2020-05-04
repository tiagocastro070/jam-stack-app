import React, { Component } from 'react'
import { FiTrash } from 'react-icons/fi'

import api from '../../services/api'
import Modal from '../../Components/Modal'
import AddButton from '../../Components/AddButton'
import HelpText from '../../Components/HelpText'
import Feedback from '../../Components/Feedback'

export default class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      create: false,
      title: '',
      type: 'text',
      description: '',
      createdId: null,
      data: [],
      feedback: []
    }

    this.handleAddModal = this.handleAddModal.bind(this)
    this.handleNewSetting = this.handleNewSetting.bind(this)
    this.fetchCreated = this.fetchCreated.bind(this)
    this.deleteSetting = this.deleteSetting.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAddModal() {
    this.setState({ create: !this.state.create })
    return this.state.create
  }

  async handleNewSetting () {
    const { title, type, description } = this.state
    const result = await api.post('/settings', {
      title, type, description
    })
    if (result.status === 200) {
      const createdId = result.data.result[0]
      this.setState({createdId})
      this.fetchCreated(createdId)
      this.handleAddModal()
    }
  }

  async fetchCreated(id) {
    const result = await api.get(`settings/${id}`)
    this.setState({
      data: [...this.state.data, result.data]
    })
  }

  async deleteSetting (event, id) {
    event.preventDefault()
    const result = await api.delete(`settings/${id}`)
    this.setState({
      data: this.state.data.filter(setting => setting.id !== id)
    })
  }

  async handleSubmit (event) {
    event.preventDefault()
    const dataForm = new FormData(event.target)
    const formValues = []

    for (var val of dataForm.entries()) {
      const fieldId = val[0].split('-')
      formValues.push({
        id: parseInt(fieldId[fieldId.length - 1]),
        value: val[1]
      })
    }
    
    const saveSettings = await api.put('settings', {
      data: formValues
    })
    
    if (saveSettings.status === 200) {
      this.setState({ feedback: ['success', 'Your custom settings has been saved'] })
    } else {
      this.setState({ feedback: ['error', 'An error has occurred. Please try again.'] })
    }
  }

  async componentDidMount () {
    const { data } = await api.get('/settings?cat=custom')
    this.setState({ data: data })
  }

  render () {
    return (
      <>
        <div className='row'>
          <div className="col-4 offset-1">
            <h4>Custom Settings</h4>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 offset-1">
            {this.state.feedback.length ? <Feedback type={this.state.feedback[0]}>{this.state.feedback[1]}</Feedback> : null}
            <form onSubmit={this.handleSubmit}>
              {this.state.data.map((setting, key) => (
                <div className='form-group' key={key}>
                  <label htmlFor={setting.name} className='d-flex justify-content-between align-items-end'>
                    {setting.title}
                    <button className='form-group__delete' onClick={event => this.deleteSetting(event, setting.id)}><FiTrash /></button>
                  </label>
                  <input type={setting.type} name={`${setting.name}-${setting.id}`} id={`${setting.name}-${setting.id}`} className="form-control" defaultValue={setting.value ? setting.value : ''} />
                  {setting.description ? (
                    <div className='form-group__messages'>
                    <small className='form-text text-muted'>{setting.description}</small>
                  </div>) : null}
                </div>
              ))}
              <div className='mt-5'>
                <button className='btn btn-primary'>Save settings</button>
              </div>
            </form>
          </div>
          <div className="col-3 offset-2">
            <AddButton label='Create new setting' align='justify' action={this.handleAddModal} />
            <Modal show={!this.state.create} toggle={this.handleAddModal} title='New custom setting' footer={(<>
              <button className="btn btn-link" onClick={this.handleAddModal}>Cancel</button>
              <button className="btn btn-primary" onClick={this.handleNewSetting}>Save changes</button>
            </>)}>
              <form>
                <div className='form-group'>
                  <label htmlFor="">Title</label>
                  <input type='text' name='' className="form-control" required onChange={e => this.setState({title: e.target.value})} />
                </div>
                <div className='form-group'>
                  <label htmlFor="">Type</label>
                  <select className="custom-select" onChange={e => this.setState({type: e.target.value})}>
                    <option value='text' defaultValue>Text</option>
                    <option value='textarea'>Textarea</option>
                    <option value='switch'>Switch</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor="">Description (optional)</label>
                  <input type='text' name='' className="form-control" onChange={e => this.setState({description: e.target.value})} />
                  <div className='form-group__messages'>
                    <small className='form-text text-muted'>An additional helper message to be shown right after the input.</small>
                  </div>
                </div>
              </form>
            </Modal>
            <HelpText>
              This settings are meant to be public. Please, do not provide sensitive information as it can be seen by everyone.
            </HelpText>
          </div>
        </div>
      </>
    );
  }
}
