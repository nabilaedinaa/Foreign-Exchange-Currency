import './App.css';
import React from 'react';
import AddButton from './components/AddButton';
import Box from '@material-ui/core/Box';

function App() {
  const amount = 10.00;

  return (
    <div className="App" style={{ width: '100%'}}>
      <header className="App-header">
        <Box className="main-page">
          <div className="Base-currency">USD - United States Dollar</div>
          <div className="Value" style={{textAlign: 'left'}}>
            USD
          <span style={{float:'right'}}>{amount.toFixed(2)}</span>
          </div>
          <hr ></hr>
          <div className="currency">
            <AddButton amount={amount} className="currency"></AddButton>
          </div>
        </Box>
      </header>
    </div>
  );
}

export default App;
