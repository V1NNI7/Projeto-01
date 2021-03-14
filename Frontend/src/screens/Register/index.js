import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './register.module.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

const Register = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            user: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(' Obrigatório'),
            email: Yup.string().email(' E-mail inválido').required('Obrigatório'),
            user: Yup.string().required(' Obrigatório'),
            password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Senha Fraca").required(' Obrigatório'),
        }),

        onSubmit: async (values) => {
            try {
                const user = {
                    email: values.email,
                    senha: values.password,
                    name: values.name,
                    usuario: values.user,
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
            <body>
                <main>
                    <h2>Cadastro!</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name">Nome completo: </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Insira seu nome"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <label htmlFor="name" >{formik.errors.name}</label> : null}
                        </div>

                        <div>
                            <label htmlFor="email">E-mail: </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Insira seu Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <label htmlFor="email" >{formik.errors.email}</label> : null}

                        </div>

                        <div>
                            <label htmlFor="user">Usuário: </label>
                            <input
                                id="user"
                                name="user"
                                type="text"
                                placeholder="Insira um nome de usuário"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.user}
                            />
                            {formik.touched.user && formik.errors.user ? <label htmlFor="user" >{formik.errors.user}</label> : null}
                        </div>

                        <div>
                            <label htmlFor="password">Senha: </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Sua senha precisa conter 8 letras, caracteres especiais e números"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? <label htmlFor="password" >{formik.errors.password}</label> : null}

                        </div>
                        <button type="submit" name="submit" id="submit">Enviar</button>
                    </form>
                </main>
            </body>
        </>
    );
};


export default Register;
