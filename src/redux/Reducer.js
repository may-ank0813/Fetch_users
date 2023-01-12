import UserButton from '../components/UserButton'
import CardContainer from '../components/CardContainer'
import {  FETCH_USERS_REQUEST , FETCH_USERS_SUCCESS , FETCH_USERS_FAILURE} from './ActionTypes'

const initialState = {
  numOfUsers: 0,
  users : [],
  loading: false,
  error: ''
}

const Reducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_USERS_SUCCESS:
      var users1 = [];

      for (let i = 1; i <= action.payload; i++) {
        users1.push(<UserButton key={i} val = {i} />);
      }
      return {
        loading: true,
        numOfUsers : action.payload,
        error: '',
        users : users1
      }
    case FETCH_USERS_FAILURE:
      
      return {
        loading: false,
        numOfUsers: 0,
        error: action.payload
      }
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
          users : []
        }
      case 'FETCH_USER' :
        console.log(action.payload);
        var users2 = [];
        users2.push(<CardContainer key="vbxv" name = {action.payload.first_name} email = {action.payload.email} img = {action.payload.img}/>)
        return{
          ...state,
          loading: false ,
          users : users2
        }
    default: return state
  }

}

export default Reducer
