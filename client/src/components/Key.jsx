import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  max-width: 20%;
  margin-left: 30px;
  background-color: #b8c4bb;
  text-align: center;
  color: black;
  font-size: 20px;
  border: 4px solid black;
  border-collapse: collapse;
`;

const StyledHeaders = styled.th`
  padding: 10px;
  border: 2px solid black;  
  font-size: 30px;
  color: #385723;
`;

const StyledCells = styled.td`
  padding: 10px;
  border: 2px solid black;
`;

const Key = (props) => {
  return (
    <div>
      <StyledTable>
        <tr>
          <StyledHeaders>Roman Numeral</StyledHeaders>
          <StyledHeaders>Numeric Value</StyledHeaders>
        </tr>
        <tr>
          <StyledCells>I</StyledCells>
          <StyledCells>1</StyledCells>
        </tr>
        <tr>
          <StyledCells>V</StyledCells>
          <StyledCells>5</StyledCells>
        </tr>
        <tr>
          <StyledCells>X</StyledCells>
          <StyledCells>10</StyledCells>
        </tr>
        <tr>
          <StyledCells>L</StyledCells>
          <StyledCells>50</StyledCells>
        </tr>
        <tr>
          <StyledCells>C</StyledCells>
          <StyledCells>100</StyledCells>
        </tr>
        <tr>
          <StyledCells>D</StyledCells>
          <StyledCells>500</StyledCells>
        </tr>
        <tr>
          <StyledCells>M</StyledCells>
          <StyledCells>1000</StyledCells>
        </tr>
      </StyledTable> 
    </div>
  )
}

export default Key;
