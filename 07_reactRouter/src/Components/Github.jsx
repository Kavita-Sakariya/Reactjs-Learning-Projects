// import { useEffect , useState} from "react"
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Kavita-Sakariya')
    //     .then((res) =>res.json())
    //     .then((data) =>setData(data))
    // },[])
  return (
    <>
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
        <h2>Name: {data.name}</h2>
        <h2>Total Repositories: {data.public_repos}</h2>
        <div className="flex justify-center m-4">
          <img className="rounded-xl" src={data.avatar_url} alt="img" />
        </div>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Kavita-Sakariya')
  return response.json()
}