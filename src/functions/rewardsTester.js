import react from 'react'

export const rewardsTester = (incomplete, success, conditionalArray ) => {

    if(incomplete){
     conditionalArray.push("incomplete")
      return conditionalArray
       }
       else{
           
       if(success){
     conditionalArray.push(true)
     return conditionalArray
       }
       else{
       conditionalArray.push(false)
     return conditionalArray
       }
    }
}

