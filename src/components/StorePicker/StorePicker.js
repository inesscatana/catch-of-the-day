import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

import { getFunName } from '../../utils/helpers'

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object,
  }

  inputRef = createRef()

  goToStore = (e) => {
    e.preventDefault()
    const storeName = this.inputRef.current.value
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.inputRef}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store →</button>
      </form>
    )
  }
}

export default StorePicker
