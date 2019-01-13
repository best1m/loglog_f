import React, { Component } from 'react';
import 'scss/header.scss';
import {Input, Menu} from 'semantic-ui-react'

class Header extends Component {
  render() {
    return (
      <div className="ll-header">
      <Menu secondary>
      <Menu.Item name='home' />
      <Menu.Item
        name='Board'
        onClick={this.handleItemClick}
      />
       <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
      </div>
    );
  }
}

export default Header;
