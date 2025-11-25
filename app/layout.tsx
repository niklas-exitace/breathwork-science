import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Science Lab - Clinical Breathwork Protocol',
  description: 'Clinical-grade stress reduction. The same breathing protocols used in 47 peer-reviewed studies.',
  other: {
    'dpl-variant': 'breathwork-science',
    'dpl-concept': 'breathwork'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="dpl-variant" content="breathwork-science" />
        <meta name="dpl-concept" content="breathwork" />
      </head>
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  )
}
