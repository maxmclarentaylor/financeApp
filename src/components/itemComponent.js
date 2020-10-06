import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromKeys } from '../reducers/ducks/items/individualItemHOC'


export const ItemComponent = (props) => {
    const items = useSelector(state => state.item.itemById[props.name])
    const dispatch = useDispatch()
    return(
        <div onClick={() => {
            dispatch(removeItemFromKeys([props.name,false]))
        }}>remove</div>
    )



}