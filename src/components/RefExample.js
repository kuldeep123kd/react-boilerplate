import React, {useRef} from 'react';

const RefExample = () => {

    const inputRef = React.useRef(null);
    const [refValues, setRefValues] = React.useState('');
    const [inputValue, setInputValue] = React.useState({});

    const accessRefProps = () => {
        console.log(inputRef);
        setRefValues(inputRef.current.value);
    };

    React.useEffect(()=>{
        inputRef.current.focus();
    })

    return (
        <>
            <h1>
                Ref Example
            </h1>
            <input ref={inputRef} />
            <button type='button' onClick={accessRefProps}>
                Click
            </button>
            <h2>
                {refValues}
            </h2>
        </>
    );
}

export default RefExample;