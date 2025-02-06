import React, { useEffect } from 'react'
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
import { useForm } from 'react-hook-form'

const FormularioMeme = ({ datosForm, onChangeForm, onSubmitForm }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'all' })

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      // handleInput(value)
      onChangeForm(value)
    })

    return () => {
      unsubscribe()
    }
  }, [])


  const handleInput = (event) => {
    // onChangeForm({value: event.target.value, key: event.target.id})
    // console.log(errors)
    onChangeForm(event)
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

  console.log(errors)

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Field.Root my={4} invalid={errors.textoSuperior}>
          <Field.Label>Texto superior</Field.Label>
          {/* <Input id="textoSuperior" placeholder="Texto 1" value={datosForm.textoSuperior} onInput={handleInput} /> */}
          <Input id="textoSuperior" placeholder="Texto 1" defaultValue={datosForm.textoSuperior} {...register('textoSuperior', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            },
            maxLength: {
              value: 20,
              message: 'El texto superior no tiene que superar los 20 caracteres'
            }
          })} />
          {errors.textoSuperior && <Field.ErrorText>{errors.textoSuperior.message}</Field.ErrorText>}
        </Field.Root>

        <Field.Root my={4} invalid={errors.textoInferior}>
          <Field.Label>Texto inferior</Field.Label>
          {/* <Input id="textoInferior" placeholder="Texto 1" value={datosForm.textoInferior} onInput={handleInput} /> */}
          <Input id="textoInferior" placeholder="Texto 1" defaultValue={datosForm.textoInferior} {...register('textoInferior', {
            required: {
              value: true,
              message: 'El campo es obligatorio'
            },
            maxLength: {
              value: 20,
              message: 'El texto inferior no tiene que superar los 20 caracteres'
            }
          })} />
          {errors.textoInferior && <Field.ErrorText>{errors.textoInferior.message}</Field.ErrorText>}
        </Field.Root>

        {/* <ColorPickerRoot my={4} value={parseColor(datosForm.colorLetra)} onValueChange={changeColor}> */}
        <ColorPickerRoot my={4} {...register('colorLetra', {
            value: datosForm.colorLetra,
            pattern: new RegExp('^#[0-9a-fA-F]{6}$')
          })}>
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

        <Field.Root my={4} invalid={errors.urlImagen}>
          <Field.Label>URL de la imagen</Field.Label>
          {/* <Input id="urlImagen" placeholder="https://..." value={datosForm.urlImagen} onInput={handleInput} /> */}
          <Input id="urlImagen" placeholder="https://..." defaultValue={datosForm.urlImagen} {...register('urlImagen', {
            validate: (value) => value.startsWith('http') || 'No tiene formato de url'
          })} />
          {errors.urlImagen && <Field.ErrorText>{errors.urlImagen.message}</Field.ErrorText>}
        </Field.Root>

        <Button type="submit" disabled={Object.keys(errors).length > 0}>
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