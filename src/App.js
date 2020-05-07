import React from 'react';
import Nav from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Nav />
      </div>
    );
  }
}

export default App;
