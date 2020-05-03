import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  state = { activeItem: 'home' }




  handleItemClick = (e, { name }) => {
    
  this.setState({ activeItem: name })
  console.log("clicked", this.state.activeItem );
  }


  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          name='News'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link} to='/'
        />
        <Menu.Item
          name='Weather'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={Link} to='/about'
        />
        <Menu.Item
          name='search'
          
          active={activeItem === 'search'}
          onClick={this.handleItemClick}
          as={Link} to='/search'
          
        />
    
      </Menu>
    )
  }
}