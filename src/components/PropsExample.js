import React from 'react';
import ExampleComponent from './ExampleComonent';

const PropsExample = (props) => {

    // React.useEffect(() => {
    //     props.changeNameProp();
    // }, [props]);
    const changeName = () => {
        props.changeNameProp()
    }
// const PropsExample = ({title, name}) => {
    return (
        <>
            <h1>Props Example</h1>
            <h2>
                {/* {props.title} */}
                {props.title}
                {props.name}
                {/* {props.newNameObj.name}
                {props.newNameArr} */}
            </h2>
            <button onClick={changeName}> Call Props</button>
            <ExampleComponent {...props} />
        </>
    )
}

export default PropsExample;