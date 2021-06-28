import React from 'react';
import ReactDOM from 'react-dom';

export default function Header(props) {
  return (
    <header>
      <div id="userDetails">
        <div class="user">{props.user}</div>
        <div class="total">${parseFloat(props.total).toFixed(2)}</div>
      </div>
    </header>
  );
}
