# Lab 3 — Next.js: Data Fetching, API Routes & UI

> **Môn học:** Các Công nghệ Mới trong Phát triển Phần mềm  
> **Sinh viên:** Lê Văn Minh — 2212416  
> **Lớp:** CTK46

## 📋 Mô tả

Bài thực hành 3 nâng cấp website Portfolio/Blog từ Lab 2 với các tính năng:

| Tính năng | Mô tả |
|-----------|-------|
| **Data Fetching** | Fetch dữ liệu từ JSONPlaceholder API (server-side, ISR) |
| **API Routes** | REST API cho Guestbook (GET/POST/DELETE) |
| **Server Actions** | Xử lý form Guestbook và Contact với Zod validation |
| **shadcn/ui** | Component library: Button, Card, Input, Badge, Separator |

## 🚀 Các trang

- `/` — Trang chủ
- `/about` — Giới thiệu
- `/blog` — Danh sách bài viết (từ JSONPlaceholder API, 10 bài)
- `/blog/[id]` — Chi tiết bài viết + tác giả + bình luận
- `/projects` — Dự án (shadcn/ui Card + Badge)
- `/guestbook` — Sổ lưu bút (Server Actions + Zod)
- `/contact` — Liên hệ (Server Actions + Zod)

## 🛠️ API Endpoints

| Method | URL | Mô tả |
|--------|-----|-------|
| GET | `/api/guestbook` | Lấy danh sách lời nhắn |
| GET | `/api/guestbook?limit=5` | Lấy 5 lời nhắn gần nhất |
| POST | `/api/guestbook` | Thêm lời nhắn mới |
| DELETE | `/api/guestbook/[id]` | Xóa lời nhắn |
| PUT | `/api/guestbook/[id]` | Cập nhật lời nhắn |

## ✅ Checklist hoàn thành

- [x] Trang Blog fetch dữ liệu từ JSONPlaceholder API (không còn hardcoded)
- [x] Trang chi tiết Blog (`/blog/[id]`) với bài viết + tác giả + bình luận
- [x] API Routes Guestbook: GET, POST, DELETE, PUT hoạt động đúng
- [x] Trang Guestbook: danh sách + form gửi lời nhắn
- [x] Form Guestbook: Server Actions + Zod validation
- [x] Trang Contact: form với Server Actions + Zod validation
- [x] Cài đặt shadcn/ui thành công
- [x] Sử dụng ≥3 shadcn/ui components (Button, Card, Input, Badge, Separator, Label, Textarea)
- [x] Nâng cấp UI: Blog, Projects, Guestbook với shadcn/ui
- [x] Conventional Commits
- [x] Push lên GitHub

## ⚙️ Chạy dự án

```bash
npm install
npm run dev
```

Truy cập: [http://localhost:3000](http://localhost:3000)

## 🧪 Test API

```bash
# Xem danh sách lời nhắn
curl http://localhost:3000/api/guestbook

# Thêm lời nhắn mới
curl -X POST http://localhost:3000/api/guestbook \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "message": "Hello!"}'

# Xóa lời nhắn
curl -X DELETE http://localhost:3000/api/guestbook/1
```

## 🔗 Links

- **GitHub Lab 2:** [lab2_CNDM_LeVanMinh](https://github.com/2212416-gif/lab2_CNDM_LeVanMinh)
- **GitHub Lab 3:** [lab3_CNDM_LeVanMinh](https://github.com/2212416-gif/lab3_CNDM_LeVanMinh)
