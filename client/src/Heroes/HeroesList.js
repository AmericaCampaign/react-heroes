import React from 'react'
import HeroCard from './HeroCard'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: '3%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  header: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginBottom: '1%'
  },
  subHeader: {
    fontFamily: 'Roboto, sans-serif',
    color: '#2c3e50',
    marginTop: '0%'
  },
  heroSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    borderRadius: '2px'
  }
}

const HeroesList = ({ heroes, deleteHero, showUniqueHero }) => {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.header}>Heroes.</h2>
        <h4 style={styles.subHeader}>This is where all the hero stuff is at.</h4>
      </div>
      <div style={styles.heroSection}>
        {
          heroes.map((hero, index) => {
            return <HeroCard
              hero={hero}
              key={index}
              deleteHero={deleteHero}
              showUniqueHero={showUniqueHero}
            />
          })
        }
      </div>
    </div>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.array.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroesList
