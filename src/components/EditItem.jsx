import { Button, Card, Title, TextInput } from '@tremor/react'

export function EditItem ({ isRestaurant }) {
  const CreateRestaurant = () => {

  }
  const CreateNewUser = () => {

  }

  return (
   <div>
    {isRestaurant
      ? <div>
          <Card style={{ marginTop: '16px' }}>
            <Title> Agregar Nuevo Restaurante
            </Title>
            <form className="">
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
                <Button type='submit' style={{ marginTop: '16px' }}>
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
