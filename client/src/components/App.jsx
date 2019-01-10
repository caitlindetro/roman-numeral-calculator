import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Key from './Key.jsx';
import Results from './Results.jsx';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

body {
  position: relative;
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

const StyledForm = styled.form`
  max-width: 50%;
  margin-left: 30px;
  padding: 15px;
  display: block;
  float: left;
  background-color: #385723;
  color: #ffffff;
  font-size: 20px;
  border: 4px solid black;
  border-collapse: collapse;
`;

const StyledHeader = styled.h1`
  font-size: 40px;
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVal: '',
      firstNum: 0,
      secondVal: '',
      secondNum: 0,
      totalVal: '',
      totalNum: 0,
      romanNumeralVals: {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      }
    };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.addNumbers = this.addNumbers.bind(this);
    this.subtractNumbers = this.subtractNumbers.bind(this);
    this.multiplyNumbers = this.multiplyNumbers.bind(this);
    this.divideNumbers = this.divideNumbers.bind(this);
  }

  handleFirstChange(event) {
    let first = event.target.value;
    //running tally of numeric equivalent
    let total = 0;
    
    if (typeof first !== 'string') {
      total = 'Nulla';
    } else if (first === '') {
      total = 0;
    }

    //split string into array of digits
    let romanNumerals = first.split('');
    //iterate through digits
    for (let i = 0; i < romanNumerals.length; i++) {
      //set variables for current and next roman numeral
      let singleRomanNumeral = romanNumerals[i];
      let nextSingleRomanNumeral = romanNumerals[i + 1];
      //get digits from romanNumeralVals object
      let numberFromRomanNumeral = this.state.romanNumeralVals[singleRomanNumeral];
      let nextNumberFromRomanNumeral = this.state.romanNumeralVals[nextSingleRomanNumeral];
      //if digit is less than next digit or there is no next digit
      if (numberFromRomanNumeral < nextNumberFromRomanNumeral && i !== romanNumerals.length - 1) {
        //subtract digit from total
        total -= numberFromRomanNumeral;
      } else {
        //add digit to total
        total += numberFromRomanNumeral;
      }
    }

    this.setState({firstVal: event.target.value, firstNum: total});
  }

  handleSecondChange(event) {
    let second = event.target.value;
    let total = 0;
    
    if (typeof second !== 'string') {
      total = 'Nulla';
    } else if (second === '') {
      total = 0;
    }

    let romanNumerals = second.split('');
    for (let i = 0; i < romanNumerals.length; i++) {
      let singleRomanNumeral = romanNumerals[i];
      let nextSingleRomanNumeral = romanNumerals[i + 1];
      let numberFromRomanNumeral = this.state.romanNumeralVals[singleRomanNumeral];
      let nextNumberFromRomanNumeral = this.state.romanNumeralVals[nextSingleRomanNumeral];
      if (numberFromRomanNumeral < nextNumberFromRomanNumeral && i !== romanNumerals.length - 1) {
        total -= numberFromRomanNumeral;
      } else {
        total += numberFromRomanNumeral;
      }
    }
    
    this.setState({secondVal: event.target.value, secondNum: total});
  }

  addNumbers(event) {
    event.preventDefault();
    
    let totalNum = this.state.firstNum + this.state.secondNum;
    //need to translate total to Roman Numeral
    let totalVal = '';
    if (totalNum < 0) {
      totalVal = 'Nulla';
    }

    this.setState({totalNum: totalNum, totalVal: totalVal});
    console.log(this.state);
  }

  subtractNumbers(event) {
    event.preventDefault();

    let totalNum = this.state.firstNum - this.state.secondNum;
    //need to translate total to Roman Numeral
    let totalVal = '';
    if (totalNum < 0) {
      totalVal = 'Nulla';
    }

    this.setState({totalNum: totalNum, totalVal: totalVal});
    console.log(this.state);
  }

  multiplyNumbers(event) {
    event.preventDefault();

    let totalNum = this.state.firstNum * this.state.secondNum;
    //need to translate total to Roman Numeral
    let totalVal = '';
    if (totalNum < 0) {
      totalVal = 'Nulla';
    }

    this.setState({totalNum: totalNum, totalVal: totalVal});
    console.log(this.state);
  }

  divideNumbers(event) {
    event.preventDefault();

    let totalNum = this.state.firstNum / this.state.secondNum;
    //need to translate total to Roman Numeral
    let totalVal = '';
    if (totalNum < 0) {
      totalVal = 'Nulla';
    }

    this.setState({totalNum: totalNum, totalVal: totalVal});
    console.log(this.state);
  }
  
  render() {
    return (
      <div>
        <GlobalStyle />
        <Title>Roman Numeral Calculator</Title>
        <Key />
        <StyledForm>
          <StyledHeader>CALCULATE</StyledHeader>
          <label>
            First Value: 
            <br />
            <input type="text" value={this.state.firstVal} onChange={this.handleFirstChange} />
          </label>
          <br />
          <label>
            Second Value:
            <br /> 
            <input type="text" value={this.state.secondVal} onChange={this.handleSecondChange} />
          </label>
          <br />
          <button type="button" onClick={this.addNumbers}> + </button>
          <button type="button" onClick={this.subtractNumbers}> - </button>
          <button type="button" onClick={this.multiplyNumbers}> * </button>
          <button type="button" onClick={this.divideNumbers}> / </button>
        </StyledForm>
        
        <Results firstVal={this.state.firstVal} firstNum={this.state.firstNum} 
          secondVal={this.state.secondVal} secondNum={this.state.secondNum}
          totalVal={this.state.totalVal} totalNum={this.state.totalNum} />
      </div>
    )
  }
}

export default App;
