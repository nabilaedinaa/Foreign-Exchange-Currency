import './App.css';
import React from 'react';
import AddButton from './components/AddButton';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';

const MainBox = styled(Box)({
  borderWidth: '1px',
  borderRadius: 3,
  borderStyle: 'solid',
  color: 'black',
  borderColor:'black',
  minHeight: '900px',
  minWidth: '480px',
});


function App() {
  const amount = 10.00;

  return (
    <div className="App" style={{ width: '100%' }}>
      <header className="App-header">
        <MainBox>
          <div className="Base-currency">USD - United States Dollar</div>
          <div className="Value" style={{textAlign: 'left'}}>
            USD
          <span style={{float:'right'}}>{amount.toFixed(2)}</span>
          </div>
          <hr ></hr>
          <AddButton amount={amount}></AddButton>
        </MainBox>
      </header>
    </div>
  );
}

export default App;
