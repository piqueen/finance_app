import React from 'react';
import MapWithAFusionTablesLayer from './Map.js';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }

  componentWillMount() {
    axios.get('/transactions')
      .then(res => this.setState({ transactions: res.data.transactions }))
  }

  render() {
    return (
      <MapWithAFusionTablesLayer />
    );
  }
}

export default App;
