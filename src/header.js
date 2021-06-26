import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="userDetails">
          <div class="user">Anthony</div>
          <div class="total">$4.00</div>
        </div>
      </header>
    );
  }
}


export default Header
