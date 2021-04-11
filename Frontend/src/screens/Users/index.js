import React, { useEffect, useState } from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import ListUsers from '../../components/Users';
import api from '../../services/api';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    const loadingusers = async () => {
        let response;
        if (search === '')
            response = await api.get(`/users`);
        else
            response = await api.get(`/users/search/${search}`); //Chave de busca da API
        setUsers([]);
        if (response.data)
            setUsers(response.data);
    };

    useEffect(() => {
        loadingusers();
    }, [search]);

    return (
        <>
            <GlobalMenu />
            <div>
                <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Pesquisa"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
            </div>
            <div>
                <div>
                    <div>
                        {users.map(u => {
                            return (
                                <div key={u.id}>
                                    <ListUsers user={u} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserList;

