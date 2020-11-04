import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromKeys } from '../reducers/ducks/items/individualItemHOC'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { updateItemsToBuy } from '../reducers/ducks/items/individualItemHOC'
import { highSpend, mediumSpend, lowSpend } from '../reducers/ducks/money/updateMoney'
import { v4 as uuidv4 } from 'uuid';


export const ItemListComponent = (props) => {

     const [itemChosen, updateItemChosen] = useState(false)
     const dispatch = useDispatch()
     const wantLevel = ["High", "Medium", "Low"]


    return(
        <div className="listDisplay">
                <div className="listDisplayItem">{props.item[0]}</div>
                <div className="listDisplayPrice">£{props.item[1]}</div>
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
                         "wantLevel": value.value,
                         "key": uuidv4()
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