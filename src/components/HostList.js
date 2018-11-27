import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.filteredHosts.map((host)=>{
        return <Host
          key={host.id}
          firstName={host.firstName}
          id={host.id}
          gender={host.gender}
          area={host.area}
          authorized={host.authorized}
          active={host.active}
          imageUrl={host.imageUrl}
          changeAuthorized={props.changeAuthorized}/>})
      }
    </Card.Group>
  )
}

export default HostList
