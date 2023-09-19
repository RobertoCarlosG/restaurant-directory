import { useState } from 'react'
import { AddRestaurant } from './restaurants/components/AddRestaurant'
import { Footer } from './components/Footer'
import { Button } from '@tremor/react'
import withResults from './mocks/restaurant-mocks.json'
import './App.css'

function App () {
  const [restaurants, setRestaurants] = useState(withResults.topRestaurants)

  const handleRemove = (nameToRemove) => {
    setRestaurants(restaurants.filter(res => res.name !== nameToRemove))
  }

  return (
    <div className='App'>
      <div>
          <h1>Prueba Tecnica</h1>
        </div>
      <main>
        <ul>
          {restaurants.map(res => {
            return (
              <li key={res.name}>
                <span>{res.name}</span> - {res.address} - {res.type} - {res.telephone}
                <Button style={{ marginLeft: '16px' }} onClick={() => handleRemove(res.name)}> Eliminar</Button>
              </li>
            )
          })}
        </ul>
        <AddRestaurant />
      </main>
      <Footer />
    </div>
  )
}

export default App
