import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Route,
    Link
  } from "react-router-dom";
import { ItemComponent } from '../components/itemComponent'
import { addItemToKeys } from '../reducers/ducks/items/individualItemHOC'
import { styles } from '../styles/index.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const ItemContainer = ( ) => {
    const items = useSelector(state => state.item.itemAllId)
    const dispatch = useDispatch()
    var arrayOfNames = []
    console.log(arrayOfNames)

    return(
       <div className="routeDisplay" >
          {items.map((item) => {
              
            const link = `/${item[0]}`
            if(item[1]){
            return(
            <div className="itemRoute" key={item[0]}>
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
            else{
                arrayOfNames.push(item[0])
            }   
        })}
        {arrayOfNames.length > 0 &&  <Dropdown options={arrayOfNames} onChange={(value) => {
           dispatch(addItemToKeys([value.value, true]))
       }} value={""} placeholder="Select an option" /> }
     
    </div>
    )
}