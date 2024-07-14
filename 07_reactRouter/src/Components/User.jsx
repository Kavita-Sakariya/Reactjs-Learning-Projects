import { useParams } from "react-router-dom"



function User() {
    const {userid}=useParams()
  return (
    <>
    user:{userid}
    
    </>
  )
}

export default User