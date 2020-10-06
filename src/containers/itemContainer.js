import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Route,
    Link
  } from "react-router-dom";
import { ItemComponent } from '../components/itemComponent'
import { addItemToKeys } from '../reducers/ducks/items/individualItemHOC'


export const ItemContainer = ( ) => {
    const items = useSelector(state => state.item.itemAllId)
    const dispatch = useDispatch()

    return(
       <div>
          {items.map((item) => {
            const link = `/${item[0]}`
            if(item[1]){
            return(
            <div key={item[0]}>
                <nav>
                    <Link to={link}>{item[0]}</Link>
                </nav>
                <div>
                <Route path={link}  render={(props) =>
                    <ItemComponent {...props} name={item[0]}/>
                }/>
                </div>
            </div>
                )
            }     
        })}
        {items.map((item, index) => {
            return(
                <div key={item + index}>
                    <div onClick={() => {
                        dispatch(addItemToKeys([item[0], true]))
                    }}>Add back in {item}</div>
                </div>
            )
        })}
    </div>
    )
}