import React, { useState } from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

const Result = ({inputs}) => {

    const resultArr = calculateInvestmentResults(inputs);
    const initialInvestment = resultArr[0].valueEndOfYear - resultArr[0].interest - resultArr[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
            <th scope='col'>year</th>
            <th scope='col'>investment value</th>
            <th scope='col'>interest</th>
            <th scope='col'>total interest</th>
            <th scope='col'>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultArr && (resultArr.map((el) => {
            const totalInterest = el.valueEndOfYear - el.annualInvestment * el.year -initialInvestment;

            const totalAmountInvested = el.valueEndOfYear - totalInterest;
 
            return <tr key={el.year}>
                <td>{el.year}</td>
                <td>{formatter.format(el.valueEndOfYear)}</td>
                <td>{formatter.format(el.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
        }
        ))}
      </tbody>
    </table>
  )
}

export default Result
