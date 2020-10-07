import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromKeys } from '../reducers/ducks/items/individualItemHOC'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { removeItemBuyList } from '../reducers/ducks/items/individualItemHOC'


export const PurchasedItemListComponent = (props) => {

     const dispatch = useDispatch()
     const wantLevel = ["High", "Medium", "Low"]


    return(
        <div className="listDisplay">
                <div className="listDisplayItem">{props.item.name}</div>
                <div className="listDisplayPrice">£{props.item.price}</div>
                <div className="saveItem">Save</div>
               <div className="purchaseItem" onClick={() => {
                   dispatch(removeItemBuyList(props.name, props.item.name ))
                }}>Remove Item</div>
                <div className="currentWantLevel">{props.item.wantLevel}</div>
               <div className="wantLevel">
                    <p>Change want level of item</p>
                    <Dropdown options={wantLevel} onChange={(value) => {
                     const itemToSend = {
                         "name": props.item[0],
                         "price": props.item[1],
                         "wantLevel": value.value
                            }
                    }} value={""} />;
                </div>
                
             </div>
    )
}