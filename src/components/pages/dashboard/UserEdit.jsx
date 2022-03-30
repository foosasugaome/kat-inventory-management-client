// import { useParams } from "react-router-dom"
import axios from "axios";

export default function UserEdit({ currentUser, users, setUsers, userId, setUserId }) {

    // const { id } = useParams()
    const id = userId
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
            <div className='flex-container'>
                <h3>Edit User Access</h3>
            </div>

            <div className='flex-container'>
                <table>
                    <tbody>
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
                                        <td className="centered-element">
                                            <input 
                                                type="checkbox" 
                                                id="manager" 
                                                name="manager" 
                                                checked={foundUser.manager} 
                                                onChange={handleManager}>
                                            </input>                                
                                    </td>
                                    :
                                    <></>
                                }
                            </tr>
                            :
                            <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}