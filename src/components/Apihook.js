import { useState,useEffect } from "react"
function useApihook(){

    const [users, setUsers] = useState([])
    
    const fetchData = () => {
        fetch("https://fakestoreapi.com/products/")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

useEffect(() => {
  fetchData()
}, [])
return users;
}
export default useApihook;