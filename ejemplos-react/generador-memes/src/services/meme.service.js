const url = 'http://localhost:8081/memes'

const findAll = async () => {
  const response = await fetch(url, {
    headers: {
      authorization: localStorage.getItem('authToken')
    }
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Error ${response.status}: ${message}`)
  }

  const memes = await response.json()
  return memes
}

const findById = async (id) => {

}

const create = async (meme) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(meme),
    headers: {
      authorization: localStorage.getItem('authToken')
    }
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Error ${response.status}: ${message}`)
  }

  const memeCreado = await response.json()
  console.log({memeCreado})
  return memeCreado
}

const updateLikes = async (memeId, likes) => {
  const response = await fetch(`${url}/${memeId}`, {
    method: 'PATCH',
    body: JSON.stringify({likes}),
    headers: {
      authorization: localStorage.getItem('authToken')
    }
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Error ${response.status}: ${message}`)
  }

  const memeActualizado = await response.json()
  console.log({memeActualizado})
  return memeActualizado
}

export default {
  findAll,
  findById,
  create,
  updateLikes,
}