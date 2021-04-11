import React from 'react';
import classes from './home.module.css'
import { Link } from 'react-router-dom'
import GlobalMenu from '../../components/GlobalMenu'


const Home = () => {
    return (
        <>
            <GlobalMenu />
            <body>
                <h1>Home!</h1>
            </body>
        </>
    );
}

export default Home;