import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromKeys } from '../reducers/ducks/items/individualItemHOC'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { removeItemBuyList, updateNeedLevel } from '../reducers/ducks/items/individualItemHOC'


export const PurchasedItemListComponent = (props) => {

    console.log(props)

     const dispatch = useDispatch()
     const wantLevel = ["High", "Medium", "Low"]


    return(
        <div className="listDisplay">
                <div className="listDisplayItem">{props.item.name}</div>
                <div className="listDisplayPrice">£{props.item.price}</div>
                <div className="saveItem">Save</div>
               <div className="purchaseItem" onClick={() => {
                   dispatch(removeItemBuyList(props.name, props.item.name ))
                   props.updateState()
                }}>Remove Item</div>
                <div className="currentWantLevel">{props.item.wantLevel}</div>
               <div className="wantLevel">
                    <p>Change want level of item</p>
                    <Dropdown options={wantLevel} onChange={(value) => {
                     const itemToSend = {
                         "name": props.item.name,
                         "price": props.item.price,
                         "wantLevel": value.value
                            }
                            dispatch(updateNeedLevel(props.name, itemToSend))
                            props.updateState()
                    }} value={""} />;
                </div>
                
             </div>
    )
}