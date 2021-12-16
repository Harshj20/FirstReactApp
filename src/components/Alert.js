import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalise=(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    return (      <div style={{height: 5}}>
        {props.alert &&
      
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
      </div>
    )
}

Alert.propsTypes ={
    alert : PropTypes.object
}
