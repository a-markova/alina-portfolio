import './globals.css'
import Navbar from './components/Navbar'
import CatWalker from './components/CatWalker'
import { Mrs_Saint_Delafield } from 'next/font/google'
import 'katex/dist/katex.min.css'

// handwriting font for the signature. Caveat (greetings and little notes) is loaded in
// globals.css instead, because next/font/google stopped building it in November 2026.
const signature = Mrs_Saint_Delafield({ weight: '400', subsets: ['latin'], variable: '--font-sig' })

export const metadata = {
  title: { default: 'Alina Markova', template: '%s | Alina Markova' },
  description: 'Business intelligence analyst at Scientist.com, a life sciences research marketplace, working toward product management.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={signature.variable}>
      <body>
        <Navbar />
        {children}
        <CatWalker />
      </body>
    </html>
  )
}