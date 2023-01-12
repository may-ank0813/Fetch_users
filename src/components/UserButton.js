import React from 'react'
import './Style.css'
import { fetchUsersDetails } from '../redux/Actions'
import { connect } from 'react-redux'

function UserButton(props){

    return(
        <div >
            <button className="btn" onClick={() => props.fetchUsersDetails(props.val)}>User - {props.val} Details</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      users : state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchUsersDetails : (i) => dispatch(fetchUsersDetails(i))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserButton)
  