import React from 'react'

function CardContainer(props){
    return(
        <div className="card" style={{alignItems: "center"}}>
            <img src={props.img} className="card-img-top" alt="..." style={{width: "18rem"}}></img>
            <div className="card-body">
                <h5 className="card-title">Hello {props.name}</h5>
                <p className="card-text">Your Email is {props.email}</p>
            </div>
        </div>
    ) 
}

export default CardContainer;