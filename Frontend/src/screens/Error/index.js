import React from 'react';
import classes from './error.module.css'
import GlobalMenu from '../../components/GlobalMenu'

const Error = (Error) => {
    return (
        <>
            <GlobalMenu />
            <h1 className={`${classes.error}`}>Parece que algo deu errado!</h1>
        </>
    );
};

export default Error;
