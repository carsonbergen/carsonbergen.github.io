import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Roboto, Roboto_Mono } from 'next/font/google'
import { Provider } from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})
const robotoMono = Roboto_Mono({
    weight: "400",
    subsets: ['latin']
})

export const metadata = {
  title: 'Carson Bergen',
  description: 'Carson Bergen\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={robotoMono.className}>
            <Provider>
              <Navbar />
                <div className='page'>
                    {children}
                </div>
            </Provider>
        </body>
    </html>
  )
}
