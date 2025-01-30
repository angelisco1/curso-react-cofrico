const url = 'http://localhost:8081/memes'

const findAll = async () => {
  const response = await fetch(url)

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

}

export default {
  findAll,
  findById,
  create,
}