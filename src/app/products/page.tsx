"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Product = {
  id: number
  name: string
  price: number
  image_url: string
  category_id: number | null
}

type Category = {
  id: number
  name: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [form, setForm] = useState({
    name: "",
    price: "",
    image_url: "",
    category_id: "",
  })

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  async function fetchProducts() {
    setLoading(true)
    const { data, error } = await supabase.from("products").select("*").order("id")
    if (error) console.error(error)
    else setProducts(data)
    setLoading(false)
  }

  async function fetchCategories() {
    const { data, error } = await supabase.from("categories").select("*").order("id")
    if (error) console.error("Lỗi lấy danh mục:", error)
    else setCategories(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const productData = {
      name: form.name,
      price: Number(form.price),
      image_url: form.image_url,
      category_id: form.category_id ? Number(form.category_id) : null,
    }

    if (editingId) {
      const { error } = await supabase.from("products").update(productData).eq("id", editingId)
      if (error) alert(" Lỗi khi cập nhật!")
      else alert(" Cập nhật thành công!")
    } else {
      const { error } = await supabase.from("products").insert([productData])
      if (error) alert(" Lỗi khi thêm sản phẩm!")
      else alert(" Thêm thành công!")
    }

    setOpen(false)
    setEditingId(null)
    setForm({ name: "", price: "", image_url: "", category_id: "" })
    fetchProducts()
  }

  async function handleDelete(id: number) {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      const { error } = await supabase.from("products").delete().eq("id", id)
      if (error) alert("❌ Lỗi khi xóa!")
      else {
        alert(" Đã xóa thành công!")
        fetchProducts()
      }
    }
  }

  function handleEdit(p: Product) {
    setEditingId(p.id)
    setForm({
      name: p.name,
      price: String(p.price),
      image_url: p.image_url,
      category_id: p.category_id ? String(p.category_id) : "",
    })
    setOpen(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">📦 Quản lý sản phẩm</h1>

        {/* Nút thêm */}
        <div className="flex justify-end mb-6">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingId(null)}> Thêm sản phẩm</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingId ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Label>Tên sản phẩm</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nhập tên sản phẩm"
                    required
                  />
                </div>
                <div>
                  <Label>Giá</Label>
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="Giá (VNĐ)"
                    required
                  />
                </div>
                <div>
                  <Label>Hình ảnh</Label>
                  <Input
                    value={form.image_url}
                    onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                    placeholder="URL hình ảnh"
                  />
                </div>
                <div>
                  <Label>Danh mục</Label>
                  <Select
                    value={form.category_id}
                    onValueChange={(value) => setForm({ ...form, category_id: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={String(cat.id)}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="submit">{editingId ? "Cập nhật" : "Thêm mới"}</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Danh sách sản phẩm */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[250px] w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Card key={p.id} className="overflow-hidden shadow-sm">
                <img
                  src={p.image_url}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="truncate">{p.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600 font-semibold">
                    {p.price.toLocaleString()} ₫
                  </p>
                  <p className="text-sm text-gray-500">
                    Danh mục: {categories.find((c) => c.id === p.category_id)?.name || "Không có"}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(p)}
                    >
                       Sửa
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(p.id)}
                    >
                       Xóa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
