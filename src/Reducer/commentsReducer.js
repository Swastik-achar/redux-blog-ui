const commentsInitialState=[]

const commentsReducer=(State=commentsInitialState,action)=>{
    switch(action.type){
        case 'SET_COMMENTS':{
            return [...action.payload]
        }
        default:{
            return [...State]
        }
    }
}
export default commentsReducer