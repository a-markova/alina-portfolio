import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Alina Markova',
  description: 'Data analytics, business, and strategy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}