import './globals.css'
import{ NavBar } from '@/components'
import{ Footer } from '@/components'


export const metadata = {
  title: 'Next Cars',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
