import React, { useState } from 'react'


const Hero = () => {
  const [firstname, setFirstname] = useState("")
  const [lasttname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [pin, setPin] = useState("")



  const [details, setInfo] = useState([])
   

  // let myArray = {
  //   firstname: '${fn.value}',
  //   // lastname: ln.value,
  //   // email: mail.value,
  //   // password: pin.value
  // }

  const submit = (e)=>{
    let userObj = { firstname, lasttname, email, pin }
    setInfo([...details, userObj])
    console.log(details)
    setEmail("")
    setLastname("")
    setFirstname("")
    setPin("")
    e.preventDefault()
  }



  return (
    <>

      <div className='container'>
        <div className='row mt-5'>
          <div className='col-8 mx-auto shadow rounded-4 border p-4'>
            <section className='row'>
              <div className='col-5'>
                <form action="">
                  <div>
                    <input className='form-control mt-4' value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder='Enter first name' />
                    <input className='form-control mt-4' value={lasttname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder='Enter last name' />
                    <input className='form-control mt-4' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Ente Email' />
                    <input className='form-control mt-4' value={pin} onChange={(e) => setPin(e.target.value)} type="text" placeholder='*****' />
                    <button className='btn btn-success col-12 mt-4' onClick={submit} >Submit details</button>
                    {/* <button className='btn btn-danger'  onClick={remove}>Delete</button> */}
                  </div>

                </form>
              </div>
              <div className='col-7'>
                <table className='table table-striped table-bordered'>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                      <th>Pin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      details.map((user, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lasttname}</td>
                            <td>{user.email}</td>
                            <td>{user.pin}</td>
                          </tr>
                        )
                      }

                      )
                    }
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>




    </>
  )
}

export default Hero