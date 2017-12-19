import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import EditHeroForm from './EditHeroForm'

class EditHeroContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    superPower: undefined,
    universe: undefined,
    nemesis: undefined,
    loading: true
  }

  static proTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.loadHeroFromServer()
  }

  onNameChange = (e) => this.setState({ name: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })

  onUniverseChange = (e) => this.setState({ universe: e.target.value })

  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })

  submitHeroToServer = (e) => {
    e.preventDefault()
    const {name, img, superPower, universe, nemesis} = this.state
    const hero = {name, img, universe, superPower, nemesis}
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'PUT',
      data: hero
    }).done((response) => {
      console.log('RES FROM PUT', response)
      alert(`${response.data.name} has been updated.`)
      this.props.history.push(`/hero/${response.data._id}`)
    })
  }

  loadHeroFromServer = (hero) => {
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'GET'
    }).done((response) => {
      const {name, img, superPower, universe, nemesis} = response.hero
      this.setState({ 
        name,
        img,
        superPower,
        universe,
        nemesis,
        loading: false
      })
    })
  }

  render () {
    const {name, img, superPower, universe, nemesis} = this.state
    return (
      <div>
        {
          !this.state.loading
          ? <EditHeroForm
            name={name}
            img={img}
            superPower={superPower}
            universe={universe}
            nemesis={nemesis}
            onNameChange={this.onNameChange}
            onImageChange={this.onImageChange}
            onSuperPowerChange={this.onSuperPowerChange}
            onUniverseChange={this.onUniverseChange}
            onNemesisChange={this.onNemesisChange}
            submitHeroToServer={this.submitHeroToServer}
            />
          : <h1>Loading...</h1>
        }
      </div>
    )
  }
}

export default withRouter(EditHeroContainer)
