import React, {useEffect, useState} from 'react'
import { listUsers } from '../services/UserService'
import { useNavigate } from 'react-router-dom'


const UserDetailsComponents = () => {
    
    const [user, setUser] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listUsers().then((response) => {
            setUser(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

    function addNewUsers() {
        navigator('/add-user')
    };

    function UpdateUser(id) {
        navigator(`/edit-employee/${id}`)
    };
    

  return (
    <div className='container'>
        <h2>List of User Details</h2>
        <button className='btn btn-secondary btn-sm mb-2' onClick={addNewUsers}>Add Users</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone_no</th>
                    <th>gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map(users =>
                    <tr key={users.id}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.phone_no}</td>
                        <td>{users.gender}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => UpdateUser(users.id)}>Update</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserDetailsComponents

