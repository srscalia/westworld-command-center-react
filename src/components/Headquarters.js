import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  state = {
    areaLimits: {
      "high_plains": 8,
      "lowlands": 6,
      "under_construction": 8,
      "pariah": 14,
      "python_pass": 14,
      "badlands": 10
    }
  }

  handleAreaChange = (value) => {
    console.log(this.props.authorizedHost);
    const areaCount = this.props.allHosts.filter(host => host.area === value).length
    if (areaCount === this.state.areaLimits[value]) {
      console.log('no room');
    } else {
      this.props.changeHostArea(value)
      console.log('all good');
    }

  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage inactiveHosts={this.props.allHosts.filter((host) => host.active === false)} allAreas={this.props.allAreas} changeAuthorized={this.props.changeAuthorized}/>

        </Grid.Column>
        <Grid.Column width={5}>

          <Details authorizedHost={this.props.allHosts.find((host)=> host.authorized === true)} allHosts={this.props.allHosts} allAreas={this.props.allAreas} changeActive={this.props.changeActive} areaLimits={this.state.areaLimits} handleAreaChange={this.handleAreaChange} />

        </Grid.Column>
        <Grid.Column width={3}>

        <LogPanel allHosts={this.props.allHosts} changeActiveAllHosts={this.props.changeActiveAllHosts} />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
