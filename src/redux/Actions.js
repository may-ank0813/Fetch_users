import { FETCH_USERS_REQUEST , FETCH_USERS_SUCCESS , FETCH_USERS_FAILURE} from './ActionTypes'
import axios from 'axios'


export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUserDetails = user =>{
  return {
      type : 'FETCH_USER',
      payload : user
  }
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        // response.data is the users
        // console.log(response.data.total)
        const users = response.data.total
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersDetails = (i) => {
  return function (dispatch) {

    console.log(i);
    const str = 'https://reqres.in/api/users/'  + i;
    axios
      .get(str)
      .then(response => {
        const user = {
          id : response.data.data.id,
          first_name : response.data.data.first_name,
          last_name : response.data.data.last_name,
          email : response.data.data.email, 
          img : response.data.data.avatar
        }
        console.log(user);
        console.log("hello");
        dispatch(fetchUserDetails(user));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


