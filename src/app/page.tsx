'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4"> Chào mừng đến với Phoenix App!</h1>
      <p className="text-gray-600 mb-6">
        Đây là trang demo sử dụng <b>Next.js + Supabase</b>.
      </p>

      <div className="flex justify-center gap-4">
        <Link href="/about" className="text-blue-500 hover:underline">
          Giới thiệu
        </Link>
        <Link href="/contact" className="text-blue-500 hover:underline">
          Liên hệ
        </Link>
      </div>
    </main>
  )
}
