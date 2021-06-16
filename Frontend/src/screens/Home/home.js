import React from 'react';
import classes from './home.module.css';
import { Link } from 'react-router-dom';
import GlobalMenu from '../../components/GlobalMenu';
import { useFormik } from 'formik';
import api from '../../services/api';


const Home = () => {

    return (
        <>
            <GlobalMenu />
            <body>
            </body>
        </>
    )
}

export default Home;