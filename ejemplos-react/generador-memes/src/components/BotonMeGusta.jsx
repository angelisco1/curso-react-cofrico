import React from 'react'
import { Button } from '@chakra-ui/react'
import { RiThumbUpLine } from 'react-icons/ri'

const BotonMeGusta = ({ likes }) => {
  return (
    <Button>
      <RiThumbUpLine />
      ({likes})
    </Button>
    // <button type="button">👌 ({likes})</button>
  )
}

export default BotonMeGusta