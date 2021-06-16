import React, { useCallback, useEffect, useState } from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import ListUsers from '../../components/Users';
import api from '../../services/api';
    
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    const deleteUsers = async (id) => {
        const response = await api.delete(`/users/${id}`)
        if(response.data) {
            alert('Usuário deletado com sucesso!')
            await loadingUsers();
        }
        else {
            alert('Não foi possivel deletar o usuário!')
        }
    }

    const updateUsers = async (id) => {
        const response = await api.put(`/users/${id}`)
    }

    const loadingUsers = useCallback(async () => {
        try {
            const response = await api.get('/users');
            if (response.data) setUsers(response.data);
        } catch (error) {
            alert(`Ocorreu uma falha de comunicação com a API! ${error}`)
        }
    }, []);

    useEffect(() => {
        loadingUsers();
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
                                    <button onClick={() => deleteUsers(u.id)}>Deletar usuário</button>
                                    <button onClick={() => updateUsers(u.id)}>Atualizar dados</button>
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

