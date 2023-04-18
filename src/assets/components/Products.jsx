import React, {useState} from 'react'


const Products = () => {
    let divStyle = {
        fontSize: "50px",
        color: "aqua",
        background: "pink"
    }
    let food = {
        swallow: "okelay",
        soup: "gbegiri",
        drink: "emuu"
    }

        const [firstname, setfirstname] = useState("")
        const[email, setemail] = useState("")
        const [pinn, setpinn] = useState("")


        const [allDetails, setDetails] = useState([])
        console.log(allDetails)
    

    function submitted(e){
        let userInput = {firstname, email, pinn}
        setDetails([...allDetails,userInput])
        console.log(allDetails)

    }
    return (
        <>
       {food.swallow}
       <div style={divStyle}>Just testing the style</div>
        <div className="container">

       <input type="text" value={firstname} onChange={(e)=> setfirstname(e.target.value)} className='form-control my-3 w-75' placeholder='enter name' />
       <input type="text" value ={email} onChange={(e)=> setemail(e.target.value)} className='form-control my-3 w-75' placeholder='enter email' />

       <input type="text" value={pinn} onChange={(e)=> setpinn(e.target.value)} className='form-control my-3 w-75' placeholder='enter password' />

       <button className='btn btn-warning text-white fw-bold' onClick={submitted}>Submit details</button>
        </div>

        <table className='table table-striped table-dark table-bordered'>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                </tr>
            </thead>
            {
                allDetails.map((user, index)=>{
                    return(
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            <td>{user.pinn}</td>
                        </tr>
                    </tbody>

                    )
                })
            }

        </table>
        </>
    )
}

export default Products