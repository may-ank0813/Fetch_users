import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/Actions'
import './Style.css'

const UserContainer = (props) => {

  return (
 
    <div>
      <button style={{ display: props.loading ? "none" : "" }} onClick={props.fetchUsers} className="btn">LOAD ALL USERS</button>
      <h2 style={{ display: props.loading ? "" : "none" }}> Number of Users Are - {props.numOfUsers} </h2>
      {props.users}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    numOfUsers : state.numOfUsers,
    loading : state.loading,
    users : state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers : () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
