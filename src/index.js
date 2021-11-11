import React from 'react'
import ReactDom from 'react-dom'
function App(props){
    return(
        <button onClick={()=>alert('Hello you!')}>
            click me!
        </button>
    )
}
ReactDom.render(
    <App />,
    document.getElementById('root')
)