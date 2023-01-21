import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Prodact from '../Prodact/Prodact';

const Order = () => {
    const users = useLoaderData()
    return (
        <div>
            {
                users.map((user) => <Prodact
                    key={user.id}
                    user={user}
                ></Prodact>)
            }
        </div>
    );
};

export default Order;