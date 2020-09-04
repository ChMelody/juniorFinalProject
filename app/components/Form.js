import React from 'react'

export const Form = (props) => (
  <form id="robot-form" onSubmit={props.handleSubmit}>

    <label htmlFor="robot">
      Robot Name:
      {!props.name}
    </label>
    <input name="name" type="text" onChange={props.handleChange} value={props.name} />


    <button type="submit" disabled={!props.name}>Submit</button>
  </form>
)

