import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './config.module.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

const Config = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            username: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('*'),
            email: Yup.string().email('E-mail inválido').required('*'),
            username: Yup.string().required('*'),
            password: Yup.string().required('*'),
            passwordConfirmation: Yup.string().required('*')
        }),

        onSubmit: async (values) => {
            try {
                const user = {
                    email: values.email,
                    password: values.password,
                    passwordConfirmation: values.passwordConfirmation,
                    name: values.name,
                    username: values.username,
                };
                if (values.password === values.passwordConfirmation) { /* Confirmação de senha */
                    const response = await api.put('users/:id', user);
                    if (response.data) {
                        history.push('/home')
                    }
                }
                else {
                    alert('As senhas devem ser iguais')
                }


            } catch (error) {
                alert(`Ocorreu uma falha durante o cadastro. Tente novamente! ${error}`);
            };
        }
    });

    return (
        <>
            <body className={`${classes.body}`}>
                <main className={`${classes.main}`}>
                    <h2>Redefinição de senha do usuário</h2>
                    <form onSubmit={formik.handleSubmit} className={`${classes.form}`}>
                        <div>
                            <label htmlFor="name"></label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Nome completo"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <label htmlFor="name" className={`${classes.error}`} >{formik.errors.name}</label> : null}
                        </div>

                        <div>
                            <label htmlFor="email"></label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Endereço de Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <label htmlFor="email" className={`${classes.error}`} >{formik.errors.email}</label> : null}

                        </div>

                        <div>
                            <label htmlFor="username"></label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Nome de usuário"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? <label htmlFor="username" className={`${classes.error}`} >{formik.errors.username}</label> : null}
                        </div>

                        <div>
                            <label htmlFor="password"></label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Senha contendo letras maiusculas e números"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? <label htmlFor="password" className={`${classes.error}`} >{formik.errors.password}</label> : null}
                        </div>

                        <div>
                            {/* <label htmlFor="password" className={classes.formTitle}>Senha: </label> */}
                            <input
                                className={`${classes.fieldInput}`}
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                type="password"
                                placeholder="Confirme sua senha"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordConfirmation}
                            />
                            {formik.touched.password && formik.errors.password ? <label htmlFor="passwordConfirmation" className={`${classes.error}`}>{formik.errors.password}</label> : null}
                        </div>

                        <button className={`mt-4 ${classes.button}`} type="submit" name="submit" id="submit">Redefinir</button>

                    </form>
                    <hr className={`divisor mt-4 mb-4`} />
                    <h1><Link to="/login">Fazer login</Link></h1>
                </main>
            </body>
        </>
    );
};


export default Config;
