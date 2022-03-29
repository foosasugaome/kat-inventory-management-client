import { useState } from "react"
import axios from "axios";

export default function EditUser({ currentUser, users, setUsers }) {

    const [form, setForm] = useState({})
    const [userId, setUserId] = useState('')

    const handleManager = (e) => {
        console.log('Checked', e.target.checked)
        let id = e.target.id
        let manager = e.target.checked
        const managerStatus = {
            manager: !manager
        }
        axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, managerStatus)
        .then(response => {
            console.log(response.data)
            setUsers(response.data)
        })
    };

    const handleSubmit = async e => {
        e.preventDefault()
        let id = e.target.id
        console.log('submit clicked')
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`, form)
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


    const userList = users.map((user, index) => {

        return (
            <>
                <tr key={`key-${index}`}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    {currentUser.manager === true ?
                        <td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    id={user._id} 
                                    name="manager" 
                                    checked={user.manager} 
                                    onChange={handleManager}>
                                </input>
                            </td>
                        </td>
                        :
                        <></>
                    }
                </tr>

                {currentUser.id === user._id ?
                    <div>  
                        <div className='centered-element'> 
                            <label htmlFor='firstname'>First Name:</label>
                            <input
                                type='text'
                                id='firstname'
                                value={form.firstname}
                                placeholder={user.firstname}
                                onChange={e => setForm({ ...form, firstname: e.target.value })}
                            />
                        </div>
                        <div className='centered-element'> 
                            <label htmlFor='lastname'>Last Name:</label>
                            <input
                                type='text'
                                id='lastname'
                                value={form.lastname}
                                placeholder={user.lastname}
                                onChange={e => setForm({ ...form, lastname: e.target.value })}
                            />
                        </div>
                            <div className='centered-element'> 
                            <label htmlFor='password'>Password:</label>
                            <input
                                type='text'
                                id='password'
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                            />
                        </div>
                        <div>
                            <td>
                                <button type='submit'>Submit</button>
                            </td>
                        </div>
                    </div>
                    :
                    <></> 
                }
            </>
        )
    })
    
    return (
        <>
            <div className='flex-container'>
                <h3>Manage Users</h3>
            </div>
            <div className='flex-container'>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        {currentUser.manager === true ?
                            <th>Manager</th>
                            :
                            <></>
                        }  
                        {currentUser.manager === true ?
                            <th>Submit</th>
                            :
                            <></>
                        }
                    </tr>
                    {userList}
                </table>
            </div>
        </>
    )
}
    