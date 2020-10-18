import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const MoneyContainer = () => {
    var  moneyObject  = useSelector((state) => state.money.moneyById)

    return(
    <div>
    <div>"Money"</div>
    <div>Current Monthly Income: {moneyObject.monthlyIncome}</div>
    <div>Current Spending Allowance: {moneyObject.currentSpendingAllowance}</div>
    <div>Costs of items which are "High" in want levels: {moneyObject.highSpend}</div>
    <div>Costs of items which are "Medium" in want levels: {moneyObject.mediumSpend}</div>
    <div>Costs of items which are "Low" in want levels: {moneyObject.lowSpend}</div>
    </div>
    )

}