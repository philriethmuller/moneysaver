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

  const addToTotal = (amount) => {
    setTotal(total + amount);
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
