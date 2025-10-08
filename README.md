# HỆ THỐNG ỨNG DỤNG WEB QUẢN LÝ PHOENIX - PHOENIX WEB APP

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## Giới thiệu

Phoenix Web App là một hệ thống quản lý trực tuyến, hỗ trợ quản lý dữ liệu, người dùng và các chức năng nghiệp vụ của dự án.  
Dự án gồm hai phần chính:

- **Backend:** Supabase (PostgreSQL) cung cấp API, quản lý cơ sở dữ liệu, xác thực người dùng, lưu trữ file và hỗ trợ các chức năng quản lý dữ liệu.
- **Frontend:** Ứng dụng web Next.js + TailwindCSS, giao diện hiện đại, responsive, hỗ trợ thao tác CRUD, phân quyền người dùng và thống kê dữ liệu.

---

## Thành viên nhóm

- **Lê Việt Hải Quân** - [Email](mailto:leviethaiquan2206@gmail.com) - [Github](https://github.com/QiQi-OU-IT/)
- **Trần Vỹ Triều** - [Email](mailto:trieu8091@gmail.com) - [Github](https://github.com/YourGithubVY)  

---

## Công nghệ sử dụng

### Backend
- **Supabase** (PostgreSQL, Auth, Storage, Realtime)
- **PostgreSQL** (Database)
- **Supabase Client Libraries** (JavaScript / TypeScript)
- **JWT / RLS** (Row Level Security, xác thực người dùng)
- **API RESTful & Realtime subscriptions**

### Frontend
- **Next.js** (React framework)
- **TailwindCSS** (UI styling)
- **React Query / SWR** (fetching dữ liệu)
- **Axios / Fetch API**
- **React Hook Form**
- **Headless UI / Heroicons** (component & icons)

---

## Tính năng nổi bật

- none

---

## Cấu trúc dự án
```
phoenix-web-app/
├── frontend/ # Ứng dụng Next.js + TailwindCSS
│ ├── app/ # Next.js app folder
│ ├── components/ # UI components
│ ├── pages/ # Trang / routing
│ ├── services/ # Supabase API service
│ ├── hooks/ # Custom hooks
│ ├── styles/ # TailwindCSS, themes
│ └── utils/ # Tiện ích
├── README.md # Tài liệu tổng quan (file này)

```

## Hướng dẫn cài đặt & chạy thử

### Frontend (Next.js + TailwindCSS)

1. **Clone dự án:**
```bash
git clone https://github.com/QiQi-IS-A-DEV/phoenix-web-app.git
cd phoenix-web-app

```
2. **Cài đặt dependencies**
```bash
npm install
```
3. **Tạo file .env.local với các biến môi trường Supabase**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
4. **Chạy ứng dụng**
```bash
npm start
```
5. **Truy cập trang web**
    http://localhost:3000/

## Giấy phép

MIT License

© 2025 Phoenix Team. All rights reserved.
