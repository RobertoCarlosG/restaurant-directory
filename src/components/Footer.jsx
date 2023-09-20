import './Footer.css'

export function Footer ({ rest }) {
  return (
        <footer className='footer'>
            {
                 // JSON.stringify(rest, null, 2)
            }
            <h5> Datos recibidos</h5>
             : {rest}

        </footer>
  )
}
