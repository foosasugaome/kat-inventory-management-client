import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function Register({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        // manager: false
    })

    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (form.password === form.passwordConfirmation) {
                // remove unneeded data in the form pre-request
                delete form.passwordConfirmation
                // do the axios since the passwords match
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, form)
                // get the token from the response
                const { token } = response.data
                // set the token in local storage
                localStorage.setItem('jwt', token)
                // decode the token
                const decoded = jwt_decode(token)
                // log the user in 
                setCurrentUser(decoded)
            } else {
                setMsg('the two passwords you entered do not match 🥴')
            }
        } catch (err) {
            if (err.response.status === 409) {
                setMsg(err.response.data.msg)
            } else {
                console.log(err)
            }
        }
    }

    return (
        <>
            <div className='main'>
                <h3>Register An Account</h3>

                <p>{msg}</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text"
                    id="username"
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                    // placeholder='enter your username...'
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    id="email"
                    value={form.name}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    // placeholder='enter your email...'
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password"
                    id="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    // placeholder='enter your password...'
                    />

                    {/* <label htmlFor="manager">Manager:</label>
                    <input 
                    type="radio"
                    id="manager"
                    value={form.manager}
                    onChange={e => setForm({ ...form, manager: e.target.value })}
                    /> */}

                    <input type="submit" />
                </form>
            </div>
        </>
    )
}