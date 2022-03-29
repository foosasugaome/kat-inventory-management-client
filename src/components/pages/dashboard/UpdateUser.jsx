import { useState } from "react"
import axios from "axios";

export default function UpdateUser({ currentUser, users, setUsers }) {

    const [form, setForm] = useState({currentUser})
    const [userId, setUserId] = useState('')

    console.log("currentuser", currentUser)
    console.log("form", form)

    const handleSubmit = async e => {
        e.preventDefault()
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
                            <div>
                                <label htmlFor='firstname'>First Name:</label>
                                <input
                                type='text'
                                id='firstname'
                                value={form.firstname}
                                placeholder={user.firstname}
                                onChange={e => setForm({ ...form, firstname: e.target.value })}
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor='lastname'>Last Name:</label>
                                <input
                                type='text'
                                id='lastname'
                                value={form.lastname}
                                placeholder={user.lastname}
                                onChange={e => setForm({ ...form, lastname: e.target.value })}
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor='password'>Password:</label>
                                <input
                                type='password'
                                id='password'
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                required
                                />
                            </div>
                            <div>
                                <button type='submit' onClick={e => setUserId(user._id)}>Submit</button>
                            </div>
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
                    <div className='flex-container'>
                        <h3>Please enter information in all fields</h3>
                    </div>
                    {userList}
                </table>
            </div>
        </>
    )
}
    