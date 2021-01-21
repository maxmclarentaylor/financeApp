import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const MoneyContainer = () => {
    var  moneyObject  = useSelector((state) => state.money.moneyById)

    return(
    <div style={moneyContainer}>
    <div style={titleDiv}>Breakdown of your current spending:</div>
   
    <div style={singleDiv}>Current Spending Allowance: £{moneyObject.currentSpendingAllowance}</div>
 
    </div>
    )

}

const moneyContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "2rem"
  };

const titleDiv = {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    fontSize: "1.5rem"
}

  const singleDiv = {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
  }