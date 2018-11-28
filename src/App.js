import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    allHosts: [],
    allAreas:[]
  }

  fetchHosts = ()=>{
    fetch('http://localhost:4000/hosts')
    .then(r=>r.json())
    .then(json=>{
      this.setState({
        allHosts: json
      })
    })
  }


  fetchAreas = ()=>{
    fetch('http://localhost:4000/areas')
    .then(r=>r.json())
    .then(json=>{
      this.setState({
        allAreas: json
      })
    })
  }

  componentDidMount(){
    this.fetchHosts()
    this.fetchAreas()
  }

  changeAuthorized = (props) => {
    const copyHosts = this.state.allHosts.map(hostObj => {
      if (hostObj.id === props.id) {
        return {...hostObj, authorized: true}
      } else {
        return {...hostObj, authorized: false}
      }
    })
    this.setState({
      allHosts: copyHosts
    })
  }

  changeActive = (props)=>{
    const copyHosts = this.state.allHosts.map(hostObj => {
      if (hostObj.id === props.authorizedHost.id) {
        return {...hostObj, active: !props.authorizedHost.active}
      } else {
        return hostObj
      }
    })
    this.setState({
      allHosts: copyHosts
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap allHosts={this.state.allHosts} allAreas={this.state.allAreas} changeAuthorized={this.changeAuthorized} />

        <Headquarters allHosts={this.state.allHosts} allAreas={this.state.allAreas} changeAuthorized={this.changeAuthorized}
        changeActive={this.changeActive}/>
      </Segment>
    )
  }
}

export default App;
