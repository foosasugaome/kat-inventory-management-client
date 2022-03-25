import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function Register() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        manager: true
    })

    const [msg, setMsg] = useState('')

    return (
        <>
            <div>
                <h3>Become a User @ User App!</h3>

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

                    <label htmlFor="manager">Manager:</label>
                    <input 
                    type="radio"
                    id="manager"
                    // value={form.manager}
                    value={true}
                    onChange={e => setForm({ ...form, manager: e.target.value })}
                    />
                    <label htmlFor="employee">Employee:</label>
                    <input 
                    type="radio"
                    id="employee"
                    // value={form.manager}
                    value={false}
                    onChange={e => setForm({ ...form, manager: e.target.value })}
                    />

                    <input type="submit" />
                </form>
            </div>
        </>
    )
}