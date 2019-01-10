import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  max-width: 30%;
  margin-left: 30px;
  float: left;
  background-color: #b8c4bb;
  text-align: center;
  color: black;
  font-size: 30px;
  border: 4px solid black;
`;

const Results = ({ firstVal, firstNum, secondVal, secondNum, totalVal, totalNum }) => {
  return (
    <div>
      <StyledTable>
        <tbody>
          <tr>
            <th />
            <th>Roman</th>
            <th>Numeric</th>
          </tr>
          <tr>
            <td />
            <td>{firstVal}</td>
            <td>{firstNum}</td>
          </tr>
          <tr>
            <td />
            <td>{secondVal}</td>
            <td>{secondNum}</td>
          </tr>
          <tr>
            <td>TOTALS</td>
            <td>{totalVal}</td>
            <td>{totalNum}</td>
          </tr>
        </tbody>
      </StyledTable>
    </div>
  )
}
  
export default Results;
