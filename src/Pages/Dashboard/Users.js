import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://stormy-sands-48896.herokuapp.com/users', {
        method: 'GET', // for jwt implement
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}` //for jwt implement
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl text-center">All Users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map(user => <UserRow

                                key={user._id}
                                user={user}
                                refetch={refetch}

                            ></UserRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Users;