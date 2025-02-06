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

    let memeCreado = null

    try {
      memeCreado = await MemeService.create(meme)
    } catch (err) {
      setError(err.message)

    } finally {
      setLoading(false)
    }

    return memeCreado
  }

  const patchMeme = async (memeId, likes) => {
    setLoading(true)

    let memeActualizado = null

    try {
      memeActualizado = await MemeService.updateLikes(memeId, likes)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }

    return memeActualizado
  }


  return {
    loading,
    error,
    getAllMemes,
    postMeme,
    patchMeme,
  }
}

export default useMemeApi