import React, {useState} from 'react'

const Freeapi = () => {

    const endPointt = "https://api.imgflip.com/get_memes "
    const [res, setresult] = useState([])
    const getData = ()=>{
      axios.get(endPointt)
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
   
   </>
  )
}

export default Freeapi