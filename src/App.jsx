import { useState } from 'react'
import { AddRestaurant } from './restaurants/components/AddRestaurant'
import { Footer } from './components/Footer'
import { RestauranItem } from './restaurants/components/RestaurantItem'
import withResults from './mocks/restaurant-mocks.json'
import './App.css'

function App () {
  const [restaurants, setRestaurants] = useState(withResults.topRestaurants)
  const [auth, setAuth] = useState(false)

  const handleAuth = (Auth) => {
    console.log(auth)
    setAuth(!Auth)
  }

  const handleRemove = (nameToRemove) => {
    setRestaurants(restaurants.filter(res => res.name !== nameToRemove))
  }

  return (
    <div className='App'>
      <div>
          <h1>Prueba Tecnica</h1>
        </div>
      <main>
        {auth
          ? <button onClick={() => handleAuth(auth)}>LogOut</button>
          : <button onClick={() => handleAuth(auth)}>LogIn</button>}
        <ul>
          {restaurants.map(res => (
              <RestauranItem
                key={res.name}
                handleRemove={() => handleRemove(res.name)}
                isAuth={auth}
                {...res}
              />
          ))}
        </ul>
        <AddRestaurant />
      </main>
      <Footer rest={auth}/>
    </div>
  )
}

export default App
