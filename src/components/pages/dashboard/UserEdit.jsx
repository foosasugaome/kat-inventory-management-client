import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserEdit({ currentUser, users, setUsers }) {

    const { id } = useParams()
    const foundUser = users.find(user => {
        return user._id === id
    })

    const [form, setForm] = useState({})

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

    // console.log("CurrentUser", currentUser)
    // console.log("Found User ", foundUser)

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('submit clicked')
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, form)
            .then(response => {
                console.log(response.data)
                setForm({
                    firstname: '',
                    lastname: '',
                    password: ''
                })
                return axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
            })
            .then(response => setUsers(response.data))
        } catch (err) {
            console.log(err)
        }
    }

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

            {foundUser && currentUser ? 
                <>
                    {foundUser._id === currentUser.id ?
                        <>
                            <div className='flex-container'>
                                <h3>Update User Info</h3>
                            </div>
                            <div className='flex-container'>
                                <form onSubmit={handleSubmit}>
                                    <p>
                                        <label htmlFor='firstname'>First Name:</label>
                                        <input
                                            type='text'
                                            id='firstname'
                                            value={form.firstname}
                                            placeholder={foundUser.firstname}
                                            onChange={e => setForm({ ...form, firstname: e.target.value })}
                                        />
                                    </p>
                                    <p>
                                        <label htmlFor='lastname'>Last Name:</label>
                                        <input
                                            type='text'
                                            id='lastname'
                                            value={form.lastname}
                                            placeholder={foundUser.lastname}
                                            onChange={e => setForm({ ...form, lastname: e.target.value })}
                                        />
                                    </p>
                                    <p>
                                        <label htmlFor='password'>Password:</label>
                                        <input
                                            type='password'
                                            id='password'
                                            value={form.password}
                                            onChange={e => setForm({ ...form, password: e.target.value })}
                                            // placeholder='enter your password...'
                                        />
                                    </p>
                                    <button type='submit'>Submit</button>
                                </form>
                            </div>
                        </>
                        :
                        <></>
                    }
                </>
                : 
                <></>
            }

        </div>
    )
}