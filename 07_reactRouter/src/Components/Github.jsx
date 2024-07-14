import { useEffect , useState} from "react"


const Github = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Kavita-Sakariya')
        .then((res) =>res.json())
        .then((data) =>setData(data))
    },[])
  return (
    <>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Name: {data.name}
        <img src={data.avatar_url} alt="img"/>
    </div>
    </>
  )
}

export default Github