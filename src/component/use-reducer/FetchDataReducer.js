import axios from "axios"
import { useEffect, useReducer } from "react"

const initialState = {
    loading: true,
    payLoad: {},
    error: ''
}

const fetchReducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                payLoad: action.resp,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                payLoad: {},
                error: action.resp
            }
        default:
            return state
    }
}

function FetchDataReducer() {
    const [userData, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(resp => {
            console.log('SUCCESS Data : ', resp.data)
            dispatch({type: 'SUCCESS', resp: resp.data})
        })
        .catch(error => {
            console.error('ERROR Data : ', error)
            dispatch({type: 'ERROR', resp: error.message})
        })
    }, [])

    return (
        <div>
            Fetch Data Component <br/>
            {userData.loading && 'Loading...'}
            {userData.error !== '' && <div>Error : {userData.error}</div>}
            {!userData.loading && userData.error === '' &&
            <div>
                Post Detail :<br/>
                id : {userData.payLoad.id}<br/>
                name: {userData.payLoad.name}<br/>
                username : {userData.payLoad.username}<br/>
                email : {userData.payLoad.email}<br/>
            </div>
            }
        </div>
    )
}

export default FetchDataReducer