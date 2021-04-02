import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './register.module.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import GlobalMenu from '../../components/GlobalMenu';

const Register = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(' Obrigatório'),
            email: Yup.string().email(' E-mail inválido').required('Obrigatório'),
            username: Yup.string().required(' Obrigatório'),
            password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Senha Fraca").required(' Obrigatório'),
        }),

        onSubmit: async (values) => {
            try {
                const user = {
                    email: values.email,
                    senha: values.password,
                    name: values.name,
                    username: values.username,
                };
                const response = await api.post('users', user);
                if (response.data) {
                    history.push('/login')
                }

            } catch (error) {
                alert(`Ocorreu uma falha durante o cadastro. Tente novamente! ${error}`);
            }
        }
    });

    return (
        <>
            <GlobalMenu />
            <body className={`${classes.body}`}>
                <main className={`container ${classes.main}`}>
                    <h2>Cadastro!</h2>
                    <form onSubmit={formik.handleSubmit} className={`${classes.form}`}>
                        <div>
                            <label htmlFor="name">Nome completo: </label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Insira seu nome"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <label htmlFor="name" className={`${classes.error}`} ><strong>{formik.errors.name}</strong></label> : null}
                        </div>

                        <div>
                            <label htmlFor="email">E-mail: </label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Insira seu Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <label htmlFor="email" className={`${classes.error}`} ><strong>{formik.errors.name}</strong></label> : null}

                        </div>

                        <div>
                            <label htmlFor="username">Usuário: </label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Insira um nome de usuário"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? <label htmlFor="username" className={`${classes.error}`} ><strong>{formik.errors.name}</strong></label> : null}
                        </div>

                        <div>
                            <label htmlFor="password">Senha: </label>
                            <input
                                className={`${classes.fieldInput}`}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Sua senha precisa conter 8 letras, caracteres especiais e números"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? <label htmlFor="password" className={`${classes.error}`} ><strong>{formik.errors.name}</strong></label> : null}

                        </div>
                        <button className={`${classes.button}`} type="submit" name="submit" id="submit">Enviar</button>
                    </form>
                </main>
            </body>
        </>
    );
};


export default Register;
