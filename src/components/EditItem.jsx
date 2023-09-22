import { Button, Card, Title, TextInput } from '@tremor/react'
import { toast } from 'sonner'
import CryptoJS from 'crypto-js'
import { useState } from 'react'

export function EditItem ({ isRestaurant }) {
  const [name, setName] = useState('')

  const [address, setAddress] = useState('')

  const [telephone, setTel] = useState('')

  const [type, setType] = useState('')

  const CreateRestaurant = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    setName(formData.get('name'))
    setAddress(formData.get('address'))
    setTel(formData.get('telephone'))
    setType(formData.get('type'))
    const newName = name.replace(' ', '%20')
    const newAddres = address.replace(' ', '%20')
    const newType = type.replace(' ', '%20')
    fetch(`/restaurant?Name=${newName}&Address=${newAddres}&Telephone=${telephone}&Type=${newType}`, {
      method: 'POST'
    })
      .then(res => {
        if (res.Code === 200) toast.success(`Restaurante ${newName} agregado correctamente`)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        toast.error(`${err.Message}`)
      })
  }
  const CreateNewUser = ({ UserName, Email, Password }) => {
    const newName = UserName.Replace(' ', '%20')
    const email = Email.Replace(' ', '%20')
    const psd = CryptoJS.SHA256(Password).toString(CryptoJS.enc.Hex)

    fetch(`https://localhost:5001/restaurant?Name=${newName}&email=${email}&Password=${psd}`, {
      method: 'POST'
    })
      .then(res => {
        if (res.Code === 200) toast.success(`Restaurante ${newName} agregado correctamente`)
      })
      .catch(err => {
        toast.error(`${err.Message}`)
      })
  }

  return (
   <div>
    {isRestaurant
      ? <div>
          <Card style={{ marginTop: '16px' }}>
            <Title> Agregar Nuevo Restaurante
            </Title>
            <form className="" onSubmit={(CreateRestaurant)}>
              <TextInput
                name='name'
                placeholder="Nombre del restaurante"
                required
              />
              <TextInput
                name='address'
                placeholder="Direccion"
                required
              />
              <TextInput
                name='telephone'
                placeholder="Numero de telefono"
                required
              />
              <TextInput
                name='type'
                placeholder="Tipo de restaurante"
                required
              />
              <div>
                <Button type='submit' style={{ marginTop: '16px' }} onClick={() => CreateRestaurant}>
                  Agregar Restaurante
                </Button>
                <span>
                </span>
              </div>
            </form>
          </Card>
      </div>
      : <div>
          <Card style={{ marginTop: '16px' }}>
            <Title> Agregar Nuevo Usuario</Title>
            <form className="">
              <TextInput
                name='name'
                placeholder="Nombre de usuario"
                required
              />
              <TextInput
                name='email'
                placeholder="Correo electronico"
                required
              />
              <TextInput
                name='contraseña'
                placeholder="Contraseña"
                type='password'
                required
              />
              <div>
                <Button type='submit' style={{ marginTop: '16px' }}>
                  Agregar Nuevo Usuario
                </Button>
                <span>
                </span>
              </div>
            </form>
        </Card>
      </div>
      }
   </div>
  )
}
