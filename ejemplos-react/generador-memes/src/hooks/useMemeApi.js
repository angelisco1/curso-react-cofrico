import { useState } from "react"
import MemeService from "../services/meme.service"

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

  const postMeme = async (meme) => {
    setLoading(true)

    try {
      await MemeService.create(meme)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }


  return {
    loading,
    error,
    getAllMemes,
    postMeme,
  }
}

export default useMemeApi