import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1> Not working </h1>
            </div>
        )
    }
}


ReactDOM.render(<App />,document.getElementById('app'))