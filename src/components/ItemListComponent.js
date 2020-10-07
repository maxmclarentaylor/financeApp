import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromKeys } from '../reducers/ducks/items/individualItemHOC'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { updateItemsToBuy } from '../reducers/ducks/items/individualItemHOC'

export const ItemListComponent = (props) => {

     const [itemChosen, updateItemChosen] = useState(false)
     const dispatch = useDispatch()
     const wantLevel = ["High", "Medium", "Low"]


    return(
        <div className="listDisplay">
                <div className="listDisplayItem">{props.item[0]}</div>
                <div className="listDisplayPrice">£{props.item[1]}</div>
                <div className="saveItem">Save</div>
                {!itemChosen && <div className="purchaseItem" onClick={() => {
                    updateItemChosen(true)
                }}>Add to Purchase list</div>}
                {itemChosen && <div className="purchaseItem" onClick={() => {
                    updateItemChosen(false)
                }}>Remove from Purchase list</div>}
                {itemChosen && <div className="wantLevel">
                    <p>Choose want level of item</p>
                    <Dropdown options={wantLevel} onChange={(value) => {
                     const itemToSend = {
                         "name": props.item[0],
                         "price": props.item[1],
                         "wantLevel": value.value
                            }
                        dispatch(updateItemsToBuy(props.name, itemToSend))
                        props.updateState()
                        updateItemChosen(false)
                    }} value={""} />;
                </div>
                }
             </div>
    )
}