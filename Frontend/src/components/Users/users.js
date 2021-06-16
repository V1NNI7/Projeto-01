import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.css';

const ListUsers = (props) => {
    return (
        <>
            <body className={classes.body}>
                <main className={classes.main}>
                    <div className={`${classes.usersList}`}>
                        <ul>
                            <li>
                                <h3>ID:</h3>
                                <h5>{props.user.id}</h5>
                                <h3>Nome:</h3>
                                <h5>{props.user.name}</h5>
                                <h3>Nome de usuário:</h3>
                                <h5>{props.user.username}</h5>
                                <h3>Email:</h3>
                                <h5>{props.user.email}</h5>
                            </li>
                        </ul>
                    </div>
                </main>
            </body>
        </>
    )
}

export default ListUsers;