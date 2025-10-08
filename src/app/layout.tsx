import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Phoenix Demo',
  description: 'NextJS + Supabase Demo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-center gap-6 mb-8">
          <Link href="/" className="hover:underline">Trang chủ</Link>
          <Link href="/about" className="hover:underline">Giới thiệu</Link>
          <Link href="/contact" className="hover:underline">Liên hệ</Link>
          <Link href="/products" className="hover:underline">Sản phẩm</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
