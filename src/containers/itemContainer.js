import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Route,
    Link
  } from "react-router-dom";
import { ItemComponent } from '../components/ItemComponent'
import { addItemToKeys } from '../reducers/ducks/items/individualItemHOC'
import { styles } from '../styles/index.css'
import Dropdown from 'react-dropdown';
import { Progress } from './Progress'
import 'react-dropdown/style.css';

export const ItemContainer = ( ) => {
    const items = useSelector(state => state.item.itemAllId)
    const [welcome, welcomeUpdate] = useState(false)
    const dispatch = useDispatch()
    var arrayOfNames = []
    var help = "Bring Items back"
    var arrayOfRoutes = []

    return(
        <div>
    <div className="parentClassItems">
       <div className="routeDisplay" >
       <div className="itemRoute" key={"Progress"}>
                <nav>
                    <Link key={"ProgressLink"} to={'/progress'} onClick={() => {
                        welcomeUpdate(true)
                    }}>Progress</Link>
                </nav>
            </div>

          {items.map((item, index) => {
            const link = `/${item[0]}`
            if(item[1]){
             arrayOfRoutes.push(<Route path={link} key={item[0] + "route"} render={(props) =>
                    <ItemComponent  {...props} name={item[0]}/>
            }/>)
            return(
            <div className="itemRoute" key={item[0]}>
                <nav>
                    <Link key={item[0] + "key"} to={link}  onClick={() => {
                        welcomeUpdate(true)
                    }}>{item[0]} </Link>
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
        <Route path="/Progress" key={"ProgressRoute"} render={(props) =>
                    <Progress  {...props} removeText={() => {
                        welcomeUpdate(true)}}/>
            }/>
        {arrayOfRoutes.map((route, index) => {
            return(route)
        })}
        </div>
     
    </div>
    {!welcome && (
        <div style={welcomeObject}> Welcome to your spending goal planner
        <p>Please click on progress to see your allowance/ goals</p>
        </div>
       
    )}
 </div>
    )
}

var welcomeObject = {
    textAlign: "center",
    marginTop: "20%",
    fontSize: "40px"
}