import React from 'react';
import { Link } from 'react-router-dom'
import classes from './styles.module.css'


function GlobalMenu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Cadastro</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Home">Página Principal</Link>
            <Link to="/userslist">Lista de usuários</Link>
        </nav>
    );
}

export default GlobalMenu;