import React from 'react'
import PropTypes from 'prop-types'

const EditHeroForm = ({ name, img, superPower, universe, nemesis, onNameChange, onImageChange, onSuperPowerChange, onUniverseChange, onNemesisChange, submitHeroToServer }) => {
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
        <label>Super Power:</label>
        <input value={superPower} onChange={onSuperPowerChange} />
      </div>
      <div>
        <label>Universe:</label>
        <input value={universe} onChange={onUniverseChange} />
      </div>
      <div>
        <label>Nemesis:</label>
        <input value={nemesis} onChange={onNemesisChange} />
      </div>
      <button onClick={submitHeroToServer}>SUBMIT</button>
    </form>
  )
}

EditHeroForm.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  superPower: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  submitHeroToServer: PropTypes.func.isRequired
}

export default EditHeroForm