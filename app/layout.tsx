import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'

const dmSans = DM_Sans({ subsets: ['latin'] })

const classesMerged = twMerge(dmSans.className, ' bg-[#eaeefe]')

export const metadata: Metadata = {
  title: 'Light Saas Landing Page',
  description: 'Template created with NextJS, Tailwind and Framer Motion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={classesMerged}>{children}</body>
    </html>
  )
}
