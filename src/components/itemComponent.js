import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromKeys } from '../reducers/ducks/items/individualItemHOC'
import { ItemListComponent } from './ItemListComponent'
import { PurchasedItemListComponent } from'./PurchasedItemsList'
import data from '../data/mockItemData/mockData.json'

export const ItemComponent = (props) => {
    const items = useSelector(state => state.item.itemById[props.name])
    const dispatch = useDispatch()
    const [over3, searchOverThree] = useState(false)
    const [search, updateSearch] = useState("")
    const [searchResults, updateSearchResults] = useState([])

    const highItems = []
    const mediumItems = []
    const lowItems = []

    if(items.itemsPurchased.length > 0){
    items.itemsPurchased.map((specificItem, index) => {
        if(specificItem.wantLevel === "High"){
            highItems.push(specificItem)
        }
        else if(specificItem.wantLevel === "Medium"){
            mediumItems.push(specificItem)
        }
        else{
            lowItems.push(specificItem)
        }
    })
    }


    useEffect(() => {
        if(search.length > 2 && over3){
            searchOverThree(false)
            // mimicking fetch request - currently just adding in dummy data
            updateSearchResults(data[props.name])
        }
        else if (search.length < 2){
            updateSearchResults([])
        }
    },[search.length])

    return(
        <div className="itemComponentShape">
        <div onClick={() => {
            dispatch(removeItemFromKeys([props.name,false]))
        }}>remove</div>
        <div>{props.name}</div>
        {highItems.length > 0 && highItems.map((individualItem,index) => {
        return <PurchasedItemListComponent key={props.name + "purchased" + index} index={index} item={individualItem} name={props.name}/>
        })
        }
        { }
        { }
        <input type="text" value={search} onChange={(event) => {
            updateSearch(event.target.value)
            if(event.target.value.length > 2){
                searchOverThree(true)
            }
        }}/>
        {searchResults.map((item,index) => {
          return(  
              <ItemListComponent key={props.name + "list" + index} name={props.name} index={index} item={item}/>
          )
        })}

        </div>
    )
}