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
    var help = "Bring Items back"
    var arrayOfRoutes = []

    return(
    <div className="parentClassItems">
       <div className="routeDisplay" >
          {items.map((item, index) => {
            const link = `/${item[0]}`
            if(item[1]){
             arrayOfRoutes.push(<Route path={link} key={item[0] + "route"} render={(props) =>
                    <ItemComponent  {...props} name={item[0]}/>
            }/>)
            return(
            <div className="itemRoute" key={item[0]}>
                <nav>
                    <Link key={item[0] + "key"} to={link}>{item[0]}</Link>
                </nav>
            </div>
                )
            }  
            else{
             arrayOfNames.push(item[0])
             return ""
            } 
              
        })}
         {arrayOfNames.length > 0 &&  <Dropdown options={arrayOfNames} onChange={(value) => {
           dispatch(addItemToKeys([value.value, true]))
       }} value={help}  /> }
        </div>
        <div>
        {arrayOfRoutes.map((route, index) => {
            return(route)
        })}
        </div>
     
    </div>
    )
}