import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RewardsConditional } from '../components/rewardsCreator'
import { RewardsOutput } from '../components/RewardsOutput'

export const Conditionals = (props) => {


    return(
        <div>
            {console.log("hiit")}
            <div>Your current goal rewards:</div>
             <RewardsOutput />
        <div className="createGoalAwards"> Create your goal rewards (click the plus button below): </div>
            <RewardsConditional />
        </div>
    )
}