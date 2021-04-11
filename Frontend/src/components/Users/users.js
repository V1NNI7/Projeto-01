import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.css';

const ListUsers = (props) => {
    return (
        <>
            <body className={classes.body}>
                <main className={classes.main}>
                    <div className={`${classes.usersList}`}>
                        <div className={classes.id}>
                            <p><strong>ID:</strong></p>
                            <p>{props.user.id}</p>
                        </div>
                        <div className={classes.name}>
                            <p><strong>Nome:</strong></p>
                            <p>{props.user.name}</p>
                        </div>
                        <div className={classes.username}>
                            <p><strong>Nome de usuário:</strong></p>
                            <p>{props.user.username}</p>
                        </div>
                        <div className={classes.email}>
                            <p><strong>Email:</strong></p>
                            <p>{props.user.email}</p>
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}

export default ListUsers;