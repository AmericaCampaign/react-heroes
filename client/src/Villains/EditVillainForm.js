import React from 'react'
import PropTypes from 'prop-types'

const EditVillainForm = ({ name, img, universe, nemesis, onNameChange, onImageChange, onUniverseChange, onNemesisChange, submitVillainToServer, heroes }) => {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input value={name} onChange={onNameChange} />
      </div>
      <div>
        <label>Image:</label>
        <input value={img} onChange={onImageChange} />
      </div>
      <div>
        <label>Universe:</label>
        <input value={universe} onChange={onUniverseChange} />
      </div>
      <div>
        <label>Nemesis: </label>
        <select onChange={onNemesisChange}>
          {
            heroes.map(hero => <option value={hero._id}> {hero.name} </option>)
          }
        </select>
      </div>
      <button onClick={submitVillainToServer}>SUBMIT</button>
    </form>
  )
}

EditVillainForm.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  submitVillainToServer: PropTypes.func.isRequired
}

export default EditVillainForm
