"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-[300px] shadow-lg">
        <CardContent className="p-6 text-center space-y-4">
          <h1 className="text-xl font-semibold">Test shadcn/ui</h1>
          <Button variant="default">Nút mặc định</Button>
          <Button variant="destructive">Nút Xóa</Button>
        </CardContent>
      </Card>
    </main>
  )
}
