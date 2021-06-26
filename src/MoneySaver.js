import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import TaskList from './tasklist';
import Footer from './footer';

class MoneySaver extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div id="content">
          <TaskList/>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<MoneySaver/>, document.getElementById('root'));

export default MoneySaver;
