import React, { useState } from 'react'

const MyNavbar = () => {
  let number = 2
  const [first, setfirst] = useState(0)
  
  const increment = ()=>{
    setfirst(first+1);
    console.log(first);
  }

  let allStudents = [

    {name: "shola", class:"software engineering"},
    {name: "ola", class:"hardware engineering"},
    {name: "temee", class:"cyber security"}
  ]
  
  return (
    <>  
    
    <div>{first}</div>
    
    <button className='btn btn-warning text-white' onClick={increment}>Click to alert</button>
    
    <table className="table table-striped table-dark table-bordered">
      <thead>
        <tr>
        <td>S/N</td>
        <td>Name</td>
        <td>Class</td>
        </tr>
      </thead> 
    
    {
  
      allStudents.map((item, index)=>(
        <>
        <tbody>
          <tr >
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.class}</td>
          </tr>
        </tbody>
         </>
      ))
    }
    </table>
    </>
  )
}

export default MyNavbar