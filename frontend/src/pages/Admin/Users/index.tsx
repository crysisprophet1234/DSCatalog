import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { useEffect, useState } from 'react';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';

const Users = () => {

    const [page, setPage] = useState<SpringPage<User>>();

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        const params: AxiosRequestConfig = {

            url: '/users',
            withCredentials: true,
            headers: {} as AxiosRequestHeaders,
            params: {
                page: 0,
                size: 12,
            },

        };

        requestBackend(params)
            .then((response) => {
                setIsAdmin(true);
                setPage(response.data);
            })
            .catch((err) => {
                setIsAdmin(err.status === 403);
            })

    }, []);

    return (

        <div>

            {isAdmin ?

                page?.content.map((item) => (
                    <p key={item.id}>{item.email}</p>
                )) 

                : <h1>Usuário deve ser administrador para acessar</h1>}
                
        </div>

    );
};

export default Users;
