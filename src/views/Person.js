import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Person = () => {
    const users = useLoaderData();
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Person</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={() => navigate(`/person/${user.id}`)}>See More</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Person