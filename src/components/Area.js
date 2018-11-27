import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => (

  <div className='area' id={props.name}>
    <h3 className='labels'>{props.name.split('_').join(' ').toUpperCase()}</h3>

    <HostList changeAuthorized={props.changeAuthorized} filteredHosts={props.allHosts.filter((host)=>host.area === props.name && host.active)}/>

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.allHosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
