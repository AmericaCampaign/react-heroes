import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2c3e50',
    paddingLeft: '3%',
    paddingRight: '3%',
    height: '12vh',
    alignItems: 'center',
    borderRadius: '2px',
    boxShadow: '2px 6px 10px #bdc3c7'
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  heroHeader: {
    fontFamily: 'Candal, sans-serif',
    color: '#e74c3c',
    marginTop: '2%'
  },
  and: {
    fontFamily: 'Candal, sans-serif',
    color: '#ecf0f1',
    marginTop: '2%'
  },
  villainHeader: {
    fontFamily: 'Candal, sans-serif',
    color: '#7f8c8d',
    marginTop: '2%',
    paddingLeft: '1%'
  },
  nav: {
    fontFamily: 'Roboto, sans-serif',
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#ecf0f1',
    marginLeft: '3%',
    marginRight: '3%'
  }
}

const NavBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heroHeader}>Superheroes</h1>
        <h1 style={styles.and}>/</h1>
        <h1 style={styles.villainHeader}>Villains</h1>
      </div>
      <nav style={styles.nav}>
        <Link style={styles.link} to='/'> Home </Link>
        <Link style={styles.link} to='/heroes'> Heroes </Link>
        <Link style={styles.link} to='/create-hero'> Create Hero </Link>
        <Link style={styles.link} to='/villains'> Villains </Link>
        <Link style={styles.link} to='/create-villain'> Create Villain </Link>
      </nav>
    </div>
  )
}

export default NavBar
