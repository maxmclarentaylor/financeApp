import React, { useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConditionalLogicCreator } from '../components/ConditionalLogicCreator'
import { ConditionalLogicOutput } from '../components/ConditionalLogicOutput'
import { updateGoalsIds } from '../reducers/ducks/goals/goals'
import { MoneyContainer } from './money'
import { Conditionals } from './conditionals'
import { v4 as uuidv4 } from 'uuid';

export const Progress = (props) => {
    const [showOptions, changeShopwOptions] = useState(false)
    const [addGoalStyle, updateAddGoalStyle] = useState(addGoal)
    const [firstTime, firstTimeUpdate] = useState(false)
    const [keyForProgress, keyForProgressUpdate] = useState(uuidv4())

    var  goalIds  = useSelector((state) => state.goals.goalsAllId)
    const hoverRef = useRef(null);

    const hoverOver = () => {
        const style = {
            fontSize: "1.5rem",
            marginLeft: "5rem",
            hover: "pointer",
            color: "red",
            width: "15%"
        }
        updateAddGoalStyle(style)
        if(!firstTime){
            firstTimeUpdate(true)
        }
    }

   const hoverOut = () => {
    const style = {
        fontSize: "1.5rem",
        marginLeft: "5rem",
        hover: "pointer",
        color: "black",
        width: "15%"
    }

    updateAddGoalStyle(style)
    if(!firstTime){
        firstTimeUpdate(true)
    }
   }

   
    useEffect(() => {
        hoverRef.current.addEventListener('mouseover', hoverOver);
        hoverRef.current.addEventListener('mouseout', hoverOut);
        props.removeText()
    }, [!firstTime])



   
    return(
        <div>
            <div className="moneyContainer">
                <MoneyContainer />
            </div>
       
        <div className="yourCurrentGoals">Your current goals:</div>
        {goalIds.map((id, index) => {
             return <ConditionalLogicOutput  key={id} id={id} index={index + 1}/>
        })}
          {!showOptions && <div style={addGoalStyle} ref={hoverRef} onClick={() => {
            hoverOut()
            changeShopwOptions(true)
        }}>Add a goal:</div>}
        {showOptions && <div onClick={() => {
            changeShopwOptions(false)
            firstTimeUpdate(false)
        }} className="yourCurrentGoalsClose">close</div>}
        {showOptions && <ConditionalLogicCreator number={goalIds.length + 1} closeAddGoals={() => changeShopwOptions(false)} updateHover={() => { firstTimeUpdate(false)}}/>}
      
        <div className="createYourGoalRewards" >
            <Conditionals ids={goalIds}/>
        </div>
        </div>
    )
}

var addGoal = {
    fontSize: "1.5rem",
    marginLeft: "5rem",
    hover: "pointer",
    color: "black",
    width: "15%"
}