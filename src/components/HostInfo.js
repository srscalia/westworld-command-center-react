import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  areaListFormatted = this.props.allAreas.map((areaObj)=>{
    const formattedName = areaObj.name.split('_').join(' ').toUpperCase()
    return {key: areaObj.name, text: formattedName, value: areaObj.name}
  })

  state = {
    options: this.areaListFormatted,
    dropdownValue: this.props.authorizedHost.area
  }

  handleChange = (e, {value}) => {
    this.props.handleAreaChange(value)
  }

  toggle = (event) => {
    // console.log(this)
    this.props.changeActive(this.props)
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.authorizedHost.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.authorizedHost.firstName} | { this.props.authorizedHost.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.authorizedHost.active ? "Active": "Decommissioned"}
                  checked="checked"
                  slider

                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.authorizedHost.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo

// options: [{key: "some_area" text: "Some Area" value: "some_area"}, {key: "another_area" text: "Another Area" value: "another_area"}],
// value: "some_area"
// // This state is just to show how the dropdown component works.
// // Options have to be formatted in this way (array of objects with keys of: key, text, value)
// // Value has to match the value in the object to render the right text.
//
// // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
