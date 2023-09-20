import { useEffect, useState } from 'react'
import { IS_DEVELOPMENT } from './components/config'
import { Footer } from './components/Footer'
import { RestauranItem } from './restaurants/components/RestaurantItem'
import { EditItem } from './components/EditItem'
import withResults from './mocks/restaurant-mocks.json'
import './App.css'

const initialSTATE = withResults.topRestaurants

function App () {
  const [restaurants, setRestaurants] = useState(initialSTATE)
  const [auth, setAuth] = useState(false)

  const updateLocalStorage = (state) => {
    localStorage.setItem('__redux__state__', JSON.stringify(state))
  }

  useEffect(() => {
    const persitedState = localStorage.getItem('__redux__state__')
    // Si existe actualizamos
    if (persitedState) updateLocalStorage(restaurants)
    // si es primera vez inicializamos
    else updateLocalStorage(initialSTATE)
  }, [restaurants])

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
        <div>
          {auth && <EditItem isRestaurant={false}/>}
          {auth && <EditItem isRestaurant={true}/>}
        </div>
      </main>
      {IS_DEVELOPMENT && <Footer rest={auth}/>}
    </div>
  )
}

export default App
