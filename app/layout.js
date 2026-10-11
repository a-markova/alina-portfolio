import './globals.css'
import Navbar from './components/Navbar'
import CatWalker from './components/CatWalker'
import 'katex/dist/katex.min.css'

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
        <CatWalker />
      </body>
    </html>
  )
}