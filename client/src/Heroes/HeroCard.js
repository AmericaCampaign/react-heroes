import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    width: '25vw',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    paddingBottom: '1%',
    backgroundColor: '#34495e'
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: '80%'
  },
  name: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginBottom: '4%',
    fontSize: '20px'
  },
  bottomSection: {
    borderTop: '1px solid #ecf0f1',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '3%',
    paddingLeft: '7%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    margin: '0%',
    fontSize: '12px'
  },
  traits: {
    margin: '0%',
    paddingTop: '1%',
    paddingBottom: '2%',
    fontFamily: 'Roboto, sans-serif',
    color: '#ecf0f1',
    fontSize: '12px'
  },
  buttonSection: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '3%',
    marginBottom: '3%'
  },
  button: {
    border: 'none'
  },
  linkSection: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '3%',
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    borderTop: '1px solid #ecf0f1',
    fontFamily: 'Roboto, sans-serif'
  },
  link: {
    textDecoration: 'none',
    color: '#ecf0f1'
  }
}

const HeroCard = ({ hero, deleteHero, showUniqueHero }) => {
  return (
    <div style={styles.container}>

      <div style={styles.topSection}>
        <h2 style={styles.name}>{hero.name}</h2>
        <img style={styles.image} src={hero.img} />
      </div>

      <div style={styles.buttonSection}>
        <button style={styles.button} onClick={() => showUniqueHero(hero)}> MORE INFO </button>
        <button style={styles.button} onClick={() => deleteHero(hero)}> DELETE </button>
      </div>

      <div style={styles.linkSection}>
        <Link style={styles.link} to={`/hero/${hero._id}`}>View Info</Link>
        <Link style={styles.link} to={`/edit-hero/${hero._id}`}>Edit Hero</Link>
      </div>

      <div style={styles.bottomSection}>
        <p style={styles.titles}>Super Power:</p>
        <p style={styles.traits}>{hero.superPower}</p>
        <p style={styles.titles}>Universe:</p>
        <p style={styles.traits}>{hero.universe}</p>
        <p style={styles.titles}>Nemesis:</p>
        <p style={styles.traits}>{hero.nemesis ? hero.nemesis.name : 'No Nemesis Yet'}</p>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
