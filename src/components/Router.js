import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExampleComponent from './ExampleComonent';
import HelloWorld from './HelloWorld';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HelloWorld />} />
                <Route path="/newuser" element={<ExampleComponent />} />

                <Route path='*' element={<><h1>Page Not Found</h1></>} />
            </Routes>
        </>
    );
    
}

export default Router;