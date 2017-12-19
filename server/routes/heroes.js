const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')

Router.route('/api/heroes')
  .get((req, res) => {
    SuperHero.find((err, superHeroes) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', superHeroes })
      }
    })
  })

Router.route('/api/heroes')
  .post((req, res) => {
    const {name, superPower, img, universe, nemesis} = req.body
    const newHero = {name, superPower, img, universe, nemesis}
    SuperHero(newHero).save((err, savedHero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedHero })
      }
    })
  })

Router.route('/api/heroes/:heroId')
  .get((req, res) => {
    const heroId = req.params.heroId
    SuperHero.findById({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `Found: ${heroId}`, hero })
      }
    })
  })

Router.route('/api/heroes/:heroId')
  .delete((req, res) => {
    const heroId = req.params.heroId
    SuperHero.remove({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `Deleted: ${hero}` })
      }
    })
  })

Router.route('/api/heroes/:heroId')
  .put((req, res) => {
    const editHeroId = req.params.heroId
    SuperHero.findById({ _id: editHeroId }, (err, hero) => {
      if (err) {
        console.log('ERROR GETTING HERO', err)
        res.json({ error: err })
      } else {
        hero.name = req.body.name ? req.body.name : hero.name
        hero.superPower = req.body.superPower ? req.body.superPower : hero.superPower
        hero.img = req.body.img ? req.body.img : hero.img
        hero.universe = req.body.universe ? req.body.universe : hero.universe
        hero.nemesis = req.body.nemesis ? req.body.nemesis : hero.nemesis
        hero.save((err, updatedHero) => {
          if (err) {
            console.log('ERROR SAVING HERO', err)
            res.json({ error: err })
          } else {
            res.json({ msg: 'Successfully updated', data: updatedHero })
          }
        })
      }
    })
  })

module.exports = Router
