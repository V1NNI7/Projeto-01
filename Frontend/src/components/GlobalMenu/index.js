import React from 'react';
import { Link } from 'react-router-dom'
import classes from './styles.module.css'


const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Register">Cadastro</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Home">Página Principal</Link>
            <Link to="/UsersList">Lista de usuários</Link>
            <Link to="/errorpage">Página de Erro</Link>
            <Link to="/new">Registro Novo</Link>
        </nav>
    );
}

export default GlobalMenu;