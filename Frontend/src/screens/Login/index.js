import React from 'react';
import { useFormik } from 'formik';
import classes from './login.module.css';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';


const Login = () => {
    const history = useHistory();
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Obrigatório';
        }
        return errors;

    }

    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',

        },
        validationSchema: Yup.object({
            email: Yup.string().email('E-mail inválido').required('Obrigatório'),
            senha: Yup.string().required('Obrigatório'),
        }),

        onSubmit: async (values) => {
            try {
                const login = {
                    email: values.email,
                    senha: values.senha
                };
                const response = await api.post('/login', login);
                if (response.data) {
                    history.push('/filmslist')
                }

            } catch (error) {
                alert(`Ocorreu uma falha durante o Login. Tente novamente! ${error}`);
            }
        }
    });

    return (
        <>

            <body>
                <main>
                    <h2>Login!</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email" className={classes.formTitle}>Email: </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Insira seu email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <label htmlFor="email">{formik.errors.email}</label> : null}
                        </div>

                        <div>
                            <label htmlFor="senha" className={classes.formTitle}>Senha: </label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                placeholder="Insira sua senha"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.senha}
                            />
                            {formik.touched.senha && formik.errors.senha ? <label htmlFor="senha">{formik.errors.senha}</label> : null}
                        </div>
                        <button type="submit" value="Continue"></button>
                    </form>
                </main>
            </body>

        </>

    )
};

export default Login;