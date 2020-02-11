import axios from 'axios'

export const startCommentsShow=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response=>{
            const comments=response.data
            dispatch(setComments(comments))
        }).catch(err=>{
            console.log(err )
        })
    }
}
export const setComments=(comments)=>{
    return {type:'SET_COMMENTS',payload:comments}
}