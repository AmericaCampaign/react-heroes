import React from 'react'
import VillainCard from './VillainCard'
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
  villainSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    borderRadius: '2px'
  }
}

const VillainsList = ({ villains, deleteVillain, showUniqueVillain }) => {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.header}>Villains.</h2>
        <h4 style={styles.subHeader}>This is where the bad guys are at.</h4>
      </div>
      <div style={styles.villainSection}>
      {
        villains.map((villain, index) => {
          return <VillainCard
            villain={villain}
            key={index}
            deleteVillain={deleteVillain}
            showUniqueVillain={showUniqueVillain}
          />
        })
      }
      </div>
    </div>
  )
}

VillainsList.propTypes = {
  villains: PropTypes.array.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain:PropTypes.func.isRequired
}

export default VillainsList
