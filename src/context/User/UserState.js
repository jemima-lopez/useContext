
import React, {useReducer} from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'

function UserState(props) {
    // eslint-disable-next-line no-unused-vars
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    // eslint-disable-next-line no-unused-vars
    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }
    
    // eslint-disable-next-line no-unused-vars
    const getProfile = async (id) => {
        // eslint-disable-next-line no-undef
        const res = await axios.get('https://reqres.in/api/users/' + id)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (

        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
