import React, {Component} from 'react'
import Home from './Home'
import NavBar from './Components/NavBar'
import $ from 'jquery'
import HeroesList from './Heroes/HeroesList'
import CreateHeroContainer from './Heroes/CreateHeroContainer'
import HeroContainer from './Heroes/HeroContainer'
import EditHeroContainer from './Heroes/EditHeroContainer'
import VillainsList from './Villains/VillainsList'
import CreateVillainContainer from './Villains/CreateVillainContainer'
import VillainContainer from './Villains/VillainContainer'
import EditVillainContainer from './Villains/EditVillainContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

  componentDidMount () {
    this.loadHeroesFromServer()
    this.loadVillainsFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      this.setState({ heroes: response.superHeroes })
    })
  }

  loadVillainsFromServer = () => {
    $.ajax({
      url: '/api/villains',
      method: 'GET'
    }).done((response) => {
      this.setState({ villains: response.villains })
    })
  }

  deleteHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadHeroesFromServer()
    })
  }

  deleteVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadVillainsFromServer()
    })
  }

  showUniqueHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      const hero = response.hero
      alert(`${hero.name} has ${hero.superPower} as a super power, and is from ${hero.universe}. ${hero.name} hates ${hero.nemesis}.`)
    })
  }

  showUniqueVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      const villain = response.villain
      alert(`${villain.name} is from ${villain.universe} and hates ${villain.nemesis}.`)
    })
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          {
            this.state.villains
              ? <Route path='/create-hero' render={() => <CreateHeroContainer villains={this.state.villains} loadHeroesFromServer={this.loadHeroesFromServer} />} />
              : null
          }

          {
            this.state.heroes
              ? <Route path='/heroes' render={() => <HeroesList heroes={this.state.heroes} deleteHero={this.deleteHero} showUniqueHero={this.showUniqueHero} />} />
              : 'No Heroes'
          }
          {
            this.state.heroes
              ? <Route path='/create-villain' render={() => <CreateVillainContainer heroes={this.state.heroes} loadVillainsFromServer={this.loadVillainsFromServer} />} />
              : null
          }
          {
            this.state.villains
              ? <Route path='/villains' render={() => <VillainsList villains={this.state.villains} deleteVillain={this.deleteVillain} showUniqueVillain={this.showUniqueVillain} />} />
              : 'No Villains'
          }
          <Route exact path='/hero/:heroId' render={() => <HeroContainer />} />
          {
            this.state.villains
              ? <Route path='/edit-hero/:heroId' render={() => <EditHeroContainer villains={this.state.villains} />} />
              : null
          }

          <Route exact path='/villain/:villainId' render={() => <VillainContainer />} />
          {
            this.state.heroes
              ? <Route path='/edit-villain/:villainId' render={() => <EditVillainContainer />} />
              : null
          }

        </div>
      </Router>
    )
  }
}

export default App
