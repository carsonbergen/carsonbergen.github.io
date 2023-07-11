import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import './globals.css';
import { Provider } from '@/components/Provider'
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
    subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Carson Bergen',
  description: 'Carson Bergen\'s personal website',
  openGraph: {
    images: ['/images/logo-light.svg'],
    title: "Carson Bergen",
    description: "My personal website, portfolio, and blog!",
    url: "https://bergen.dev/"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' style={{colorScheme: 'dark'}} suppressHydrationWarning>
        <body className="font-roboto-slab">
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
