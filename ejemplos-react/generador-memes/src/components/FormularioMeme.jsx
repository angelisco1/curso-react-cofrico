import React from 'react'
import { Box, Button, Field, Input, parseColor } from '@chakra-ui/react'
import {
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerRoot,
  ColorPickerSliders,
  ColorPickerTrigger,
} from "@components/ui/color-picker"
import { RiSave3Fill } from 'react-icons/ri'

const FormularioMeme = ({ datosForm, onChangeForm, onSubmitForm }) => {

  const handleInput = (event) => {
    onChangeForm({value: event.target.value, key: event.target.id})
  }

  const changeColor = (color) => {
    // console.log(color)
    // const hexColor = `#${color.value.toHexInt()}`
    const evento = {
      target: {
        value: color.valueAsString,
        id: 'colorLetra'
      }
    }
    handleInput(evento)
  }

  return (
    <Box>
      <form onSubmit={onSubmitForm}>
        <Field.Root my={4}>
          <Field.Label>Texto superior</Field.Label>
          <Input id="textoSuperior" placeholder="Texto 1" value={datosForm.textoSuperior} onInput={handleInput} />
          <Field.ErrorText>This is an error text</Field.ErrorText>
        </Field.Root>

        <Field.Root my={4}>
          <Field.Label>Texto inferior</Field.Label>
          <Input id="textoInferior" placeholder="Texto 1" value={datosForm.textoInferior} onInput={handleInput} />
          <Field.ErrorText>This is an error text</Field.ErrorText>
        </Field.Root>

        <ColorPickerRoot my={4} value={parseColor(datosForm.colorLetra)} onValueChange={changeColor}>
          <ColorPickerLabel>Color letra</ColorPickerLabel>
          <ColorPickerControl>
            <ColorPickerInput />
            <ColorPickerTrigger />
          </ColorPickerControl>
          <ColorPickerContent>
            <ColorPickerArea />
            <ColorPickerEyeDropper />
            <ColorPickerSliders />
          </ColorPickerContent>
        </ColorPickerRoot>

        <Field.Root my={4}>
          <Field.Label>URL de la imagen</Field.Label>
          <Input id="urlImagen" placeholder="https://..." value={datosForm.urlImagen} onInput={handleInput} />
          <Field.ErrorText>This is an error text</Field.ErrorText>
        </Field.Root>

        <Button type="submit">
          <RiSave3Fill /> Guardar
        </Button>

        {/* <div>
          <label htmlFor="textoSuperior">Texto superior</label>
          <input type="text" id="textoSuperior" value={datosForm.textoSuperior} onInput={handleInput} />
        </div> */}
        {/* <div>
          <label htmlFor="textoInferior">Texto inferior</label>
          <input type="text" id="textoInferior" value={datosForm.textoInferior} onInput={handleInput} />
        </div> */}
        {/* <div>
          <label htmlFor="colorLetra">Color de la letra</label>
          <input type="text" id="colorLetra" value={datosForm.colorLetra} onInput={handleInput} />
        </div> */}
        {/* <div>
          <label htmlFor="urlImagen">Url</label>
          <input type="text" id="urlImagen" value={datosForm.urlImagen} onInput={handleInput} />
        </div> */}
        {/* <div>
          <button type="submit">Guardar</button>
        </div> */}
      </form>
    </Box>
  )
}

export default FormularioMeme