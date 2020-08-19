import React from 'react'

const Loading = (props) => {
    return (
        
            <div className="ui active dimmer">
                <div className="ui massive text loader">{props.message}</div>
            </div>
           
        
    )
}

Loading.defaultPorps = {
    message: 'If page fails to load, return home.'
}

export default Loading