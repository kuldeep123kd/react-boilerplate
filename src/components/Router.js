import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ExampleComponent from './ExampleComonent';
import HelloWorld from './HelloWorld';
import PropsExample from './PropsExample';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HelloWorld />} />
                <Route path="propsexample" element={<PropsExample />} />
                <Route path=":userId" element={<div>User Found</div>} />
                
                {/* If Routes Not Found Not Found renders */}
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </>
    )
}

export default Router;