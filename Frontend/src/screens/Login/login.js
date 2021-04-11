import React from 'react';
import { useFormik } from 'formik';
import classes from './login.module.css';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';
import GlobalMenu from '../../components/GlobalMenu';


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
            password: '',

        },
        validationSchema: Yup.object({
            email: Yup.string().email('E-mail inválido').required('*'),
            password: Yup.string().required('*'),
        }),

        onSubmit: async (values) => {
            try {
                const login = {
                    email: values.email,
                    password: values.password
                };
                const response = await api.post('/login', login);
                if (response.data) {
                    history.push('/userslist')
                }

            } catch (error) {
                alert(`Ocorreu uma falha durante o Login. Tente novamente! ${error}`);
            }
        }
    });

    return (
        <>
            <GlobalMenu />
            <body className={`${classes.body}`}>
                <main className={`${classes.main}`}>
                    <h2 className={`text-center`}>Login</h2>
                    <form onSubmit={formik.handleSubmit} className={`${classes.form}`}>
                        <div>
                            {/* <label htmlFor="email" className={classes.formTitle}>Email: </label> */}
                            <input
                                className={`${classes.fieldInput}`}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <label htmlFor="email" className={`${classes.error}`}>{formik.errors.email}</label> : null}
                        </div>

                        <div>
                            {/* <label htmlFor="password" className={classes.formTitle}>Senha: </label> */}
                            <input
                                className={`${classes.fieldInput}`}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Senha"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? <label htmlFor="password" className={`${classes.error}`}>{formik.errors.password}</label> : null}
                        </div>
                        <button className={`mt-4 ${classes.button}`} type="submit">Entrar</button>
                            <hr className={`divisor mt-4 mb-4`} />
                            <p>Não possui conta? <Link to="/register">Cadastre-se</Link> agora!</p>
                    </form>
                </main>
            </body>

        </>

    )
};

export default Login;