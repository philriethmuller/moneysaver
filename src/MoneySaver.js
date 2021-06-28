import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import TaskList from './tasklist';
import Footer from './footer';

const taskItems = [
  {name: 'Dishwashing', amount: 0.5},
  {name: 'Bins', amount:0.5},
  {name: 'Sweep the floors', amount:1}
];

export default function MoneySaver() {
  const [user, setUser] = useState('Anthony');
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);

  //Update the total amount saved
  const addToTotal = (amount) => {
    setTotal(total + amount);

    updateHistory(amount);
  }

  //Update the history of adding tasks from the task list
  const updateHistory = (amount) => {
    setHistory((prev) => {
       return [amount, ...prev];
    });
  }

  return (
    <React.Fragment>
      <Header user={user} total={total}/>
      <div id="content">
        <TaskList taskItems={taskItems} onItemClick={addToTotal}/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.render(<MoneySaver/>, document.getElementById('root'));
