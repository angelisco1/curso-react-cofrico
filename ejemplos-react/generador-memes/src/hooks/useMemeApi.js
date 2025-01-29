import { useState } from "react"

const useMemeApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getAllMemes = async () => {
    setLoading(true)

    let memes = []
    try {
      memes = await MemeService.findAll()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }

    return memes
  }


  return {
    loading,
    error,
    getAllMemes,
  }
}

export default useMemeApi