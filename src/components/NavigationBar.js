/*
  This component's purpose is to render the navigation bar which
  include the logo, phone number, login, and hamburger menu.

  Clicking on the hamburger menu animates into a X. Note there
  is no modal revealed from this action.

  If a modal were to be added, it is recommended to use the following
  npm module:  https://www.npmjs.com/package/react-modal.

  The styling for this component is found at ../styles/app.css from
  lines 19 to 53.
*/

import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../assets/images/logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className='navbar'>
        <img id='logo' className='logo' src={logo} alt='sparta-plaesent__logo'></img>
        <div className='navbar-items'>
          <p className='navbar-items__phone'>212.555.5555</p>
          <p className='navbar-items__login'>LOGIN</p>
            <div className='navbar-items__hamburger'>
              <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick}
              animationDuration={0.5}
              borderRadius={0}
              color='#000'
              height={10}
              rotate={0}
              width={15}
              strokeWidth={1}
              />
            </div>
          </div>
        </div>
    )
  }
}

export default NavBar;
