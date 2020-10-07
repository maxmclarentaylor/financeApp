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
    const [hitAgain, hitAgainUpdate] = useState(true)

    const[highItems, updateHighItems] = useState([])
    const[mediumItems, updateMediumItems] = useState([])
    const[lowItems, updateLowItems] = useState([])

    useEffect(() =>{
        if(items.itemsPurchased.length > 0 && hitAgain){
            items.itemsPurchased.map((specificItem, index) => {
                if(specificItem.wantLevel === "High"){
                    mediumItems.map((itemMediumArray,index) => {
                        if(itemMediumArray.name === specificItem.name){
                            mediumItems.splice(index,1)
                        }
                    })
                    lowItems.map((lowArray,index) => {
                        if(lowArray.name === specificItem.name){
                            lowItems.splice(index,1)
                        }
                    })
                     highItems.map((highArray,index) => {
                        if(highArray.name === specificItem.name){
                            highItems.splice(index,1)
                        }
                    })

                    var newArrayHigh = highItems
                    newArrayHigh.push(specificItem)
                    updateHighItems(newArrayHigh)
                }
                else if(specificItem.wantLevel === "Medium"){
                    lowItems.map((lowArray,index) => {
                        if(lowArray.name === specificItem.name){
                            lowItems.splice(index,1)
                        }
                    })

                    highItems.map((highArray,index) => {
                        if(highArray.name === specificItem.name){
                            highItems.splice(index,1)
                        }
                    })

                    mediumItems.map((itemMediumArray,index) => {
                        if(itemMediumArray.name === specificItem.name){
                            mediumItems.splice(index,1)
                        }
                    })


                    var newArrayMedium = mediumItems
                    newArrayMedium.push(specificItem)
                     updateMediumItems(newArrayMedium)
                }
                else{
                    mediumItems.map((itemMediumArray,index) => {
                        if(itemMediumArray.name === specificItem.name){
                            mediumItems.splice(index,1)
                        }
                    })

                    highItems.map((highArray,index) => {
                        if(highArray.name === specificItem.name){
                            highItems.splice(index,1)
                        }
                    })

                    lowItems.map((lowArray,index) => {
                        if(lowArray.name === specificItem.name){
                            lowItems.splice(index,1)
                        }
                    })

                    var newArrayLow = lowItems
                    newArrayLow.push(specificItem)
                    updateLowItems(newArrayLow)
                }
            })
            hitAgainUpdate(false)
         }
         else if(
            items.itemsPurchased.length === 0
         && hitAgain){
            updateHighItems([])
            updateLowItems([])
            updateMediumItems([])
            hitAgainUpdate(false)
         }
    })
       
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

    console.log(mediumItems)

    return(
        <div className="itemComponentShape">
        <div onClick={() => {
            dispatch(removeItemFromKeys([props.name,false]))
        }}>remove</div>
        <div>{props.name}</div>
        {highItems.length > 0 && highItems.map((individualItem,index) => {
        return <PurchasedItemListComponent key={props.name + "purchased" + index} index={index} item={individualItem} name={props.name} updateState={() => {
            hitAgainUpdate(true)
        }}/>
        })
        }
         {mediumItems.length > 0 && mediumItems.map((individualItem,index) => {
        return <PurchasedItemListComponent key={props.name + "purchased" + index} index={index} item={individualItem} name={props.name} updateState={() => {
            hitAgainUpdate(true)}}/>
        })
        }
         {lowItems.length > 0 && lowItems.map((individualItem,index) => {
        return <PurchasedItemListComponent key={props.name + "purchased" + index} index={index} item={individualItem} name={props.name} updateState={() => {
            hitAgainUpdate(true)}}/>
        })
        }
        <input type="text" value={search} onChange={(event) => {
            updateSearch(event.target.value)
            if(event.target.value.length > 2){
                searchOverThree(true)
            }
        }}/>
        {searchResults.map((item,index) => {
          return(  
              <ItemListComponent key={props.name + "list" + index} name={props.name} index={index} item={item} updateState={() => {
                hitAgainUpdate(true)}}/>
          )
        })}

        </div>
    )
}