import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.allAreas.map((area)=>{
        return <Area allHosts={props.allHosts} key={area.id} name={area.name} id={area.id} limit={area.limit} changeAuthorized={props.changeAuthorized}/>})
      }
    </Segment>
  )
}

export default WestworldMap
