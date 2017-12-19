import React from 'react'

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

const HeroInfo = ({ hero }) => {
  return (
    <div style={styles.container}>
      <h3>{hero.name}</h3>
      <img style={styles.image} src={hero.img} />
      <p>SuperPower: {hero.superPower}</p>
      <p>Universe: {hero.universe}</p>
      <p>Nemesis: {hero.nemesis}</p>
    </div>
  )
}

export default HeroInfo
