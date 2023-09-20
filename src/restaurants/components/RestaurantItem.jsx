import { Button } from '@tremor/react'
export function RestauranItem ({ name, isAuth, address, telephone, type, handleRemove }) {
  return (
      <li>
          <div>
              <strong>{name}</strong> - {address}
          </div>
          <footer>
              <small>
                  Telefono: {telephone}
              </small><br />
              <small>
                  Tipo: {type}
              </small><br />
              {isAuth && <Button style={{ marginLeft: '16px' }} onClick={handleRemove}> Eliminar </Button>}
          </footer>
      </li>
  )
}
