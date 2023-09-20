import './Footer.css'

export function Footer ({ rest }) {
  return (
        <footer className='footer'>
            {
                 // JSON.stringify(rest, null, 2)
            }
            <h5> Roberto</h5>
             Auth es: {rest}

        </footer>
  )
}
