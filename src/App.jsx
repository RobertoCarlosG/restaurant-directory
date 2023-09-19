import { useEffect } from 'react'
import './App.css'

function App () {
  useEffect(() => {
    fetch('APIII')
      .then(async res => await res.json())
      .then(res => {
        // setUsers(res.results)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Prueba Tecnica</h1>
    </div>
  )
}

export default App
