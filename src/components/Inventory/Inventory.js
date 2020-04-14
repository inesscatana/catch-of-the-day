import React from 'react'
import PropTypes from 'prop-types'

import { AddFishForm } from '../AddFishForm'
import { EditFishForm } from '../EditFishForm'

const Inventory = ({
  addFish,
  updateFish,
  deleteFish,
  loadSampleFishes,
  fishes,
}) => (
  <div className="inventory">
    <h2>Inventory</h2>
    {Object.keys(fishes).map((key) => (
      <EditFishForm
        key={key}
        index={key}
        fish={fishes[key]}
        updateFish={updateFish}
        deleteFish={deleteFish}
      />
    ))}
    <AddFishForm addFish={addFish} />
    <button onClick={loadSampleFishes}>Load Sample Fishes</button>
  </div>
)

Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
}

export default Inventory
