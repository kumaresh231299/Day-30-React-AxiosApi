import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get('https://665872ed5c361705264882b8.mockapi.io/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  return (
      <div className='m-3'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          {users.map((element, index) => {
            return (
              <div key={index}>
                <div className="col">
                  <div className="card shadow">
                    <div className="card-header bg-secondary-subtle ">
                      <h5>{element?.name}</h5>
                      <p className='card-subtitle'>{element?.username}</p>
                      <small className='fw-lighter '>{element?.email}</small>
                    </div>
                    <div className="card-body bg-secondary-subtle">
                      <h6 className='card-subtitle text-muted'>Address</h6>
                      <div className="card-text fw-light">Street : {element?.address?.street}</div>
                      <div className="card-text fw-light">Suite : {element?.address?.suite}</div>
                      <div className="card-text fw-light"> City : {element?.address?.city}</div>
                      <div className="card-text fw-light"> Zipcode : {element?.address?.zipcode}</div>
                      <h6 className='card-subtitle mt-2 text-muted'>geo</h6>
                      <span className="card-text fw-light"> lat : {element?.address?.geo?.lat}</span>
                      <span className="card-text fw-light"> lng : {element?.address?.geo?.lng}</span>
                      <h6 className='card-subtitle mt-2 text-muted'>Contact</h6>
                      <div className="card-text fw-light"> phone : {element?.phone}</div>
                      <div className="card-text fw-light"> website : {element?.website}</div>
                    </div>
                    <div className="card-footer bg-secondary-subtle">
                    <h6 className='card-subtitle mb-2 text-muted'>Company Details</h6>
                      <p className='card-text fw-light'>Name : {element?.company?.name}</p>
                      <p className='card-text fw-light'>CatchPhrase : {element?.company?.catchPhrase}</p>
                      <p className='card-text fw-light'>bs : {element?.company?.bs}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
  )
}

export default Home
