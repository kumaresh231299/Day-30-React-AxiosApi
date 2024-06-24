import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetails({ setId }) {
  const [users, setUsers] = useState([])
  const [deleteData, setDeleteData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, [deleteData])
  //Read
  const fetchData = async () => {
    await axios.get('https://665872ed5c361705264882b8.mockapi.io/api/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  //Edit
  const handleEdit = (id) => {
    setId(id);
    // navigate(`/edit/${id}`)
    navigate(`/form`)
  }

  //Delete
  const handleDel = async (id) => {

    await axios.delete(`https://665872ed5c361705264882b8.mockapi.io/api/users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err))

  }

  return (
    <div>
      <h1>UserDetails</h1>
      <table className="table table-success table-striped font-monospace">
        <thead>
          <tr align="center">
            <th scope="col">User_id</th>
            <th scope="col">User_Name</th>
            <th scope="col">User_Email</th>
            <th scope="col">Phone no</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider" align="center" >
          {users.map((ele, index) => {
            return (
              <tr key={index}>
                <th>{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td><button className='btn btn-warning' onClick={() => { handleEdit(ele.id) }}>Edit</button>&nbsp;
                  <button className='btn btn-danger' onClick={() => { handleDel(ele.id) }}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserDetails
