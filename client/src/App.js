import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = { helloworlds: [] }
    
    componentDidMount(){
        fetch('http://localhost:3020/url')
            .then(res => res.json())
            .then(helloworlds => this.setState({helloworlds}));
    }
    
    render() {
        return (
            <div>
            {this.state.helloworlds.map(helloworld => 
            //<h1>{helloworld.hello} {helloworld.world}</h1>
            <h1> {helloworld.hello} {helloworld.world} </h1>  
            )}
            </div>
            /*<div>
            {this.state.helloworlds.map(helloworld => 
                <h1> {helloworld.hello} {helloworld.world}  </h1>
            </div>*/
        );
    }
}
export default App;
