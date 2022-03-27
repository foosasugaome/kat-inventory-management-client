import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserEdit({ users, setUsers }) {

    const { id } = useParams()

    const foundUser = users.find(user => {
        return user._id === id
    })

    const [manager, setManager] = useState(false);

    // console.log(manager)

    const handleManager = () => {
        setManager(!manager)
        if (manager === true) {
            console.log('manager')
        } else {
            console.log('not manager')
        }
    };

    useEffect(() => {
        const managerStatus = {
            manager: manager
        }
        axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`, managerStatus)
        .then(response => {
            console.log(response.data)
        })
    }, [manager])

    return (
        <div className='main'>
            <h1>User Info</h1> 
            {/* {userInfo} */}
            {foundUser ? 
                <>
                    <h4>Username: {foundUser.username}</h4>
                    <h4>Name: {foundUser.lastname}, {foundUser.firstname}</h4>
                    <h4>Email: {foundUser.email}</h4> 
                </>
                :
                <></>
            } 
            <h4>
                Manager Privileges <input type="checkbox" id="manager" name="manager" checked={manager} onChange={handleManager}></input>
            </h4>
        </div>
    )
}