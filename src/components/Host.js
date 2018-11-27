import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return(
    <Card
      className={props.authorized ? "host selected" : "host"}
      onClick={event=> {props.changeAuthorized(props)}}
      image={props.imageUrl}
      raised
    />
  )
}

export default Host
