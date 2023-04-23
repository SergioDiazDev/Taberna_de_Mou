import '../styles/globals.css'
import { Navigation } from "../components/Navigation/Navigation"
export const metadata = {
  title: 'Taberna de Mou',
  description: 'Mou al habla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Taberna de Mou</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
      </head>
      <body>
      <Navigation />
      {children}
      </body>
    </html>
  )
}
