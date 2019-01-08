import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

body {
  background-color: #e8f7ee;
  padding: 0;
  margin: 0;
  font-family: 'Fjalla One', sans-serif;
}
`;

const Title = styled.h1`
  padding: 30px 20px 5px 0;
  margin-top: -5px;
  background-color: #385723;
  border-bottom: 10px solid #b8c4bb;
  text-align: right;
  color: #ffffff;
  font-size: 60px;
  text-shadow: 3px 2px #000000;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
  }
  
  render() {
    return (
      <div>
        <GlobalStyle />
        <Title>Roman Numeral Calculator</Title>
      </div>
    )
  }
}
  
export default App;
