import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import EditVillainForm from './EditVillainForm'

class EditVillainContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined,
    loading: true
  }

  static proTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.loadVillainFromServer()
  }

  onNameChange = (e) => this.setState({ name: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onUniverseChange = (e) => this.setState({ universe: e.target.value })

  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })

  loadVillainFromServer = (villain) => {
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}`,
      method: 'GET'
    }).done((response) => {
      const {name, img, universe, nemesis} = response.villain
      this.setState({
        name,
        img,
        universe,
        nemesis,
        loading: false
      })
    })
  }

  submitVillainToServer = (e) => {
    e.preventDefault()
    const {name, img, universe, nemesis} = this.state
    const villain = {name, img, universe, nemesis}
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}`,
      method: 'PUT',
      data: villain
    }).done((response) => {
      console.log('RES FROM PUT', response)
      alert(`${response.data.name} has been updated.`)
      this.props.history.push(`/villain/${response.data._id}`)
    })
  }

  render () {
    const {name, img, universe, nemesis} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <EditVillainForm
              name={name}
              img={img}
              universe={universe}
              nemesis={nemesis}
              onNameChange={this.onNameChange}
              onImageChange={this.onImageChange}
              onUniverseChange={this.onUniverseChange}
              onNemesisChange={this.onNemesisChange}
              submitVillainToServer={this.submitVillainToServer}
              heroes={this.props.heroes}
            />
            : <h1>Loading...</h1>
        }
      </div>
    )
  }
}

export default withRouter(EditVillainContainer)
