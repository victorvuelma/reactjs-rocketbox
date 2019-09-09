import React, { Component } from 'react'
import api from '../../services/api'

import { Container } from './styles'

import logo from '../../assets/logo.svg'

export default class Main extends Component {
  state = {
    newBox: '',
  }

  handleSubmit = async e => {
    e.preventDefault()

    const response = await api.post('boxes', {
      title: this.state.newBox,
    })

    this.props.history.push(`/box/${response.data._id}`)
  }

  handleInputChange = e => {
    this.setState({ newBox: e.target.value })
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="RocketBox Logo" />
          <input
            type="text"
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </Container>
    )
  }
}
