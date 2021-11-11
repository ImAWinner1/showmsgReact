import React from 'react'
import ReactDom from 'react-dom'
class App extends React.Component{
    showMassage(msg){
        alert(msg);
    }
    render(){
        return(
            <button onClick={() => this.showMassage('Hello you!')}>
                click me!
            </button>

            )
}

}
ReactDom.render(
    <App />,
    document.getElementById('root')
)