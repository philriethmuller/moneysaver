import React from 'react';
import ReactDOM from 'react-dom';

export default function TaskList(props) {
  const handleClick = (amount) => {
    props.onItemClick(amount);
  }

  return (
    <ul>
      {props.taskItems.map((item, index) => (
        <li onClick={() => handleClick(item.amount)}>{item.name}</li>
      ))}
    </ul>
  );
}
