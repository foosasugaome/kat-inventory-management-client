import { useState } from "react"
import axios from "axios";

export default function UpdateUser({ currentUser, users, setUsers }) {

    const [form, setForm] = useState({})
    const [userId, setUserId] = useState('')

    // const handleManager = (e) => {
    //     console.log('Checked', e.target.checked)
    //     let id = e.target.id
    //     let manager = e.target.checked
    //     const managerStatus = {
    //         manager: !manager
    //     }
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, managerStatus)
    //     .then(response => {
    //         console.log(response.data)
    //         setUsers(response.data)
    //     })
    // };

    const handleSubmit = async e => {
        e.preventDefault()
        // let id = e.target.id
        // console.log("e.target", e.target)
        console.log("userId", userId)
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
                {currentUser.id === user._id ?
                    
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <td>
                                <label htmlFor='firstname'>{user.firstname}</label>
                                <input
                                type='text'
                                id='firstname'
                                value={form.firstname}
                                placeholder={user.firstname}
                                onChange={e => setForm({ ...form, firstname: e.target.value })}
                                />
                            </td>
                            <td>
                                <label htmlFor='lastname'>{user.lastname}</label>
                                <input
                                type='text'
                                id='lastname'
                                value={form.lastname}
                                placeholder={user.lastname}
                                onChange={e => setForm({ ...form, lastname: e.target.value })}
                                />
                            </td>
                            <td>
                                <label htmlFor='password'>Password:</label>
                                <input
                                type='password'
                                id='password'
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                />
                            </td>
                            <td>
                                <button type='submit' onClick={e => setUserId(user._id)}>Submit</button>
                            </td>
                        </form>
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
                <h3>Update Info</h3>
            </div>
            <div className='flex-container'>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Password</th>
                        <th>Submit</th>
                    </tr>
                    {userList}
                </table>
            </div>
        </>
    )
}
    