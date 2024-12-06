import '@/app/sytles/globals.css'
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <Script src="https://unpkg.com/@phosphor-icons/web"/>
      <body className='bg-slate-800'>
        {children}
      </body>
    </html>
  )
}