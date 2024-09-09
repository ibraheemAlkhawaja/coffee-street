import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './Components';
import { Header } from './Sections';

const Root = () => {
    return (
        <>
        {/* <Header/> */}
        <div className="App">
            <Outlet/>
    </div>
    <ScrollToTop/>
    </>
    );
}

export default Root;
