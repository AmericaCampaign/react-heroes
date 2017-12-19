import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid gray',
    width: '50%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: '75%',
    border: '1px solid gray'
  }
}

const VillainInfo = ({ villain }) => {
  return (
    <div style={styles.container}>
      <h3>{villain.name}</h3>
      <img style={styles.image} src={villain.img} />
      <p>Universe: {villain.universe}</p>
      <p>Nemesis: {villain.nemesis}</p>
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired
}

export default VillainInfo