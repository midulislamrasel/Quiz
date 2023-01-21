import React from 'react';

const Prodact = ({user}) => {
    const { id, name, username } = user;
    return (
        <div>
            <h3>Prodact js</h3>
            <h3>ID {id}</h3>
            <h2>Name: {name}</h2>
            <p>UserName: {username}</p>
        </div>
    );
};

export default Prodact;