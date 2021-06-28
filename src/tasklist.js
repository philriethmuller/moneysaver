import React from 'react';
import ReactDOM from 'react-dom';

export default function TaskList(props) {
  const handleClick = (amount) => {
    props.onItemClick(amount);
  }

  const formatCurrency = (amount) => {
    if (amount < 1) {
      return `${amount*100}c`;
    } else {
      return `$${parseFloat(amount).toFixed(2)}`;
    }
  }

  return (
    <ul class="taskList">
      {props.taskItems.map((item, index) => (
        <li onClick={() => handleClick(item.amount)}>
          <span>{item.name}</span>
          <span class="taskValue">+{formatCurrency(item.amount)}</span>
        </li>
      ))}
    </ul>
  );
}
