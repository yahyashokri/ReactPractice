import React from 'react'
import 'bootstrap'

function Button({variant ,isDisabled}) {
  return (
    <button className={`btn btn-${variant} btn-outline-${variant} ${isDisabled} btnCustom`}  >{variant}</button>
  )
}

export default Button