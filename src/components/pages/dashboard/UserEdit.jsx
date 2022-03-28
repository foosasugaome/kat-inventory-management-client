import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserEdit({ currentUser, setCurrentUser, users, setUsers }) {

    const { id } = useParams()
    const foundUser = users.find(user => {
        return user._id === id
    })

    console.log("Found User", foundUser)

    // const [manager, setManager] = useState(foundUser.manager);
    const [form, setForm] = useState({})

    const handleManager = () => {
        // setManager(!manager)
        // if (manager === true) {
        //     console.log('manager')
        // } else {
        //     console.log('not manager')
        // }
        const managerStatus = {
            manager: !foundUser.manager
        }
        axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, managerStatus)
        .then(response => {
            console.log(response.data)
            setUsers(response.data)
        })
    };

    // useEffect(() => {
    //     const managerStatus = {
    //         manager: manager
    //     }
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, managerStatus)
    //     .then(response => {
    //         console.log(response.data)
    //     })
    // }, [manager])

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
            <h2>User Info</h2> 

            {foundUser && currentUser ? 
                <>
                    <h4>Username: {foundUser.username}</h4>
                    <h4>Name: {foundUser.firstname} {foundUser.lastname}</h4>
                    <h4>Email: {foundUser.email}</h4>
                    <h4>Manager Privileges: 
                        <input 
                            type="checkbox" 
                            id="manager" 
                            name="manager" 
                            checked={foundUser.manager} 
                            onChange={handleManager}>
                        </input>
                    </h4>
                </>
                :
                <></>
            }

            {foundUser && currentUser ? 
                <>
                    {foundUser._id === currentUser.id ?
                        <>
                            <h2>Update User Info</h2>
                            <form onSubmit={handleSubmit}>
                                <p>
                                    <label htmlFor='firstname'>First Name:</label>
                                    <input
                                        type='text'
                                        id='firstname'
                                        value={form.firstname}
                                        onChange={e => setForm({ ...form, firstname: e.target.value })}
                                    />
                                </p>
                                <p>
                                    <label htmlFor='lastname'>Last Name:</label>
                                    <input
                                        type='text'
                                        id='lastname'
                                        value={form.lastname}
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