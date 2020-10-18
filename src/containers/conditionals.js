import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RewardsConditional } from '../components/rewardsCreator'

export const Conditionals = (props) => {


        
    return(
        <div>
        <div>"Conditionals</div>
            <RewardsConditional />
        </div>
    )
}