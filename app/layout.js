import './globals.css'

export const metadata = {
  title: 'Notes',
  description: 'My Notes System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
