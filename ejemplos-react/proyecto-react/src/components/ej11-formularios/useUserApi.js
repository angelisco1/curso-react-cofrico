import { useEffect, useState } from "react"

const useUserApi = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(false)
  }, [users])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch('http://localhost:8081/users')

    const users = await response.json()
    setUsers(users)
  }

  const postUser = async (user) => {
    setLoading(true)

    const response = await fetch('http://localhost:8081/users', {
      method: 'POST',
      body: JSON.stringify(user),
    })

    const userCreated = await response.json()
    // setTimeout(() => {
      setUsers([...users, userCreated])
    // }, 3000)
  }

  return {
    loading,
    users,
    getUsers,
    postUser,
  }
}

export default useUserApi