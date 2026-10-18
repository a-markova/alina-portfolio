import './globals.css'
import Navbar from './components/Navbar'
import CatWalker from './components/CatWalker'
import { Mrs_Saint_Delafield, Caveat } from 'next/font/google'
import 'katex/dist/katex.min.css'

// handwriting fonts for the signature, greetings and little notes
const signature = Mrs_Saint_Delafield({ weight: '400', subsets: ['latin'], variable: '--font-sig' })
const hand = Caveat({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-hand' })

export const metadata = {
  title: { default: 'Alina Markova', template: '%s | Alina Markova' },
  description: 'Business intelligence analyst at Scientist.com, a life sciences research marketplace, working toward product management.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${signature.variable} ${hand.variable}`}>
      <body>
        <Navbar />
        {children}
        <CatWalker />
      </body>
    </html>
  )
}