'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Cảm ơn bạn đã gửi: ${message}`)
    setMessage('')
  }

  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-semibold mb-3">📞 Liên hệ</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          className="border rounded-lg p-2 w-1/2 h-24"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Gửi
        </button>
      </form>
    </main>
  )
}
