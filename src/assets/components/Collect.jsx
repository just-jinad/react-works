import axios from 'axios'
import React,{useState} from 'react'


const Collect = () => {
  const endPoint = "https://jsonplaceholder.typicode.com/users"
  const endPoint2 = "https://api.github.com/users"
  const [response, setresults] = useState([])
  const getData = ()=>{
    axios.get(endPoint2)
    .then((result)=>{
      console.log(result.data);
      setresults(result.data)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
    <button className='btn btn-danger fw-bold' onClick={getData}>Click me to get data</button>

    <table className='table table-striped table-dark'>
      <thead>
        <tr>
          <td>S/N</td>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
    
    {
      response.map((user)=>(
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.login}</td>
           <img className='w-50' src={user.avatar_url} alt="" />
          </tr>
        </tbody>
      ))
    }
    </table>
    </>
  )
}

export default Collect