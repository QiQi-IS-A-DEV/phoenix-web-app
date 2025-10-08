'use client'


// import { useState } from 'react'

export default function ContactPage() {


  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-semibold mb-3">Liên hệ</h1>
      
      {/* Thêm mục tiêu liên hệ mới */}
      <div className="text-left max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-xl font-medium mb-2 text-blue-700">Mọi thắc mắc vui lòng liên hệ:</h2>
        
        {/* Thông tin liên hệ */}
        <div className="space-y-3">
          {/* Người 1 */}
          <div className="p-3 border-l-4 border-blue-500 bg-white rounded">
            <p className="font-semibold text-lg">Lê Việt Hải Quân - <span className="text-gray-600">Phoenix#1</span></p>
            <p className="text-sm text-blue-600">Email: <a href="mailto:leviethaiquan@gmail.com" className="hover:underline">leviethaiquan@gmail.com</a></p>
          </div>
          
          {/* Người 2 */}
          <div className="p-3 border-l-4 border-blue-500 bg-white rounded">
            <p className="font-semibold text-lg">Trần Vỹ Triều - <span className="text-gray-600">Phoenix#2</span></p>
            <p className="text-sm text-blue-600">Email: <a href="mailto:trieu8091@gmail.com" className="hover:underline">trieu8091@gmail.com</a></p>
          </div>

          {/* Sự kiện */}
          <p className="mt-4 pt-2 border-t text-sm font-medium text-purple-700">
            Cuộc thi giải pháp phần mềm 2025
          </p>
        </div>
      </div>
      
    </main>
  )
}