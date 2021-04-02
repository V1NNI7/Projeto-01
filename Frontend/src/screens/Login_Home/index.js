import react from 'react';
import { useFormik } from 'formik';
import classes from './loginHome.module.css';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';
import GlobalMenu from '../../components/GlobalMenu';

const loginHome = () => {
    return (
        <>
        <GlobalMenu /> 
            Login Home funcionando!
        </>
    );
};


export default loginHome;