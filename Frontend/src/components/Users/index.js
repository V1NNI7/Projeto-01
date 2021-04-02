import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.css';
import api from '../../services/api'

const Delete = async (props) => {
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Obrigatório';
        }
        return errors;

    }
    
    const response = await api.destroy(`/users`);
    if(response.data) {
        alert(`Usuário deletado com sucesso!`)
    }
    else {
    
    }
}

const ListUsers = (props) => {
    return (
        <>
            <body className={classes.body}>
                <div className={classes.userslist}>
                    <p><strong>Nome:</strong> {props.user.name}</p>
                    <p><strong>Nome de Usuário:</strong> {props.user.username}</p>
                    <p><strong>Email:</strong> {props.user.email}</p>
                    <div>
                        <button 
                        type="button" 
                        id={props.user.id} 
                        name="button" 
                        className={classes.button}
                        onClick={Delete} 
                        >Delete</button>
                    </div>
                </div>
            </body>
        </>
    )

}

export default ListUsers;