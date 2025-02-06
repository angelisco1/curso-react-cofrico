import React from 'react'
import { Button } from '@chakra-ui/react'
import { RiThumbUpLine } from 'react-icons/ri'

const BotonMeGusta = ({ likes, memeId, onHandleClick }) => {
  return (
    <Button onClick={() => onHandleClick(memeId, likes + 1)}>
      <RiThumbUpLine />
      ({likes})
    </Button>
    // <button type="button">👌 ({likes})</button>
  )
}

export default BotonMeGusta