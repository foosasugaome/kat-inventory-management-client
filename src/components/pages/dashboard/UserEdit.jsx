import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserEdit({ currentUser, users, setUsers }) {

    const { id } = useParams()
    const foundUser = users.find(user => {
        return user._id === id
    })

    const handleManager = () => {
        const managerStatus = {
            manager: !foundUser.manager
        }
        axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, managerStatus)
        .then(response => {
            console.log(response.data)
            setUsers(response.data)
        })
    };

    return (
        <div>

            <h2 className='flex-container'>
                <Link to={`/dashboard`}>Dashboard</Link>
            </h2>

            <div className='flex-container'>
                <h3>Manage Users</h3>
            </div>

            <div className='flex-container'>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Manager Priveleges</th>
                    </tr>
    
                    {foundUser && currentUser ? 
                        <tr>
                            <td>{foundUser.firstname}</td>
                            <td>{foundUser.lastname}</td>
                            <td>{foundUser.email}</td>
                            {currentUser.manager === true ?
                                <td>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            id="manager" 
                                            name="manager" 
                                            checked={foundUser.manager} 
                                            onChange={handleManager}>
                                        </input>
                                    </td>
                                </td>
                                :
                                <></>
                            }
                        </tr>
                        :
                        <></>
                    }
                </table>
            </div>
        </div>
    )
}