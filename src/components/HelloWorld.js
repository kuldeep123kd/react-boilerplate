import React from 'react';
import ExampleComponent from './ExampleComonent';

const HelloWorld = () => {
    const [count, setCount] = React.useState(0);
    const changeCount = () => {
        setCount(count + 1);
    }
    const changeCountSubtract = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Hello World</h1>
            <h1>{count}</h1>
            <button onClick={changeCount}>Add Count</button>
            <button onClick={changeCountSubtract}>Subtract Count</button>
            <ExampleComponent />
        </div>
    );
}

export default HelloWorld;