import React from 'react'

export default function About(props) {

    return (
        <div className="container text-center my-5" style={{color : props.mode === 'light'?'black':'white'}}>
            <p style={{fontSize:"4rem"}}>About us</p>
            <p>This part is currently empty</p>
            <p>This part was made to show the use of router in react by which we can switch pages without loading the whole page</p>
        </div>
    )
}
