import React from 'react';

class HelloWorld1 extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }

    state = {
        count: 0
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <h1>Hello World 1</h1>
            <h1>{this.state.count}</h1> 
            <button onClick={this.changeCount}>Add Count</button>
            </div>
        );
    }
}

export default HelloWorld1;