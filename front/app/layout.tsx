import '@/app/sytles/globals.css'

interface Props {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body className='bg-slate-800 w-vw print:bg-white flex'>
        {children}
      </body>
    </html>
  )
}