import '@/app/sytles/globals.css'
import Script from 'next/script';

interface Props {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <Script src="https://unpkg.com/@phosphor-icons/web"/>
      <body className='bg-slate-800 w-svw print:bg-white flex'>
        {children}
      </body>
    </html>
  )
}