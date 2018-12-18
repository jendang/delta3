import React, { Component } from 'react'
import { Button, Dropdown, Menu  } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large' pointing secondary>
        {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /> */}
        <Menu.Item>
          <img src="logo/png"/>
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          name='About'
          // active={activeItem === 'messages'}
          // onClick={this.handleItemClick}
        />
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>Dutch</Dropdown.Item>
              <Dropdown.Item>French</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
          <Link to={`/login`}>Login</Link>
          </Menu.Item>
          <Menu.Item>
          <Link to={`/signup`}>Sign Up</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
