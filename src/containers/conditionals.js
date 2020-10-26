import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RewardsConditional } from '../components/rewardsCreator'
import { RewardsOutput } from '../components/RewardsOutput'

export const Conditionals = (props) => {


        
    return(
        <div>
        <div>"Conditionals</div>
            <RewardsOutput />
            <RewardsConditional />
        </div>
    )
}