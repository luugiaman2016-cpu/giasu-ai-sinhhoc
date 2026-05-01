
# GIA SƯ AI - Nền tảng Học tập Di truyền Học Tương tác

## Giới thiệu

**GIA SƯ AI** là một hệ thống dạy học thông minh được thiết kế đặc biệt cho học sinh THPT và những người chuẩn bị luyện thi Đại học tại Việt Nam. Hệ thống hoạt động theo hai chế độ chính:

### 🎓 Chế độ Giáo viên (Teacher Mode)
- Giáo viên gửi link Google Docs chứa nội dung bài giảng
- Hệ thống AI đọc và phân tích cấu trúc
- Tự động tạo bài học tương tác hoàn chỉnh

### 👨‍🎓 Chế độ Học sinh (Student Mode)
- Học sinh gõ "bắt đầu học" để kích hoạt
- Giao diện tương tác 100% trên trình duyệt
- Không cần gửi thêm tin nhắn nào khác

---

## 📋 Cấu trúc Bài Học

Mỗi chủ đề được chia thành **2 phần**:

### Phần 1: Củng Cố Kiến Thức (100 câu)
Các bài tập tương tác được tạo từ lý thuyết:

#### 1. **Kéo Thả (Drag & Drop)**
- Sắp xếp thứ tự các bước
- Xếp hạng mức độ
- Phân loại khái niệm

#### 2. **Ghép Cột (Matching)**
- Ghép thuật ngữ ↔ định nghĩa
- Ghép nguyên nhân ↔ kết quả
- Ghép công thức ↔ ứng dụng

#### 3. **Điền Khuyết (Fill-in-the-blank)**
- Hoàn thành định nghĩa
- Điền công thức
- Gợi ý số ký tự

### Phần 2: Tự Luyện (100 câu)
Trắc nghiệm chuẩn BGDĐT với 3 dạng:

#### 1. **Nhiều Lựa Chọn** (A/B/C/D)
- Chọn 1 đáp án đúng nhất

#### 2. **Đúng / Sai** (True/False)
- Xác định mệnh đề
- Giải thích lý do

#### 3. **Trả Lời Ngắn** (Short Answer)
- Điền ô trống
- Gợi ý hướng dẫn

---

## 🎯 Ba Chủ Đề Chính

### 1️⃣ **Di Truyền Học Mendel & Hoàn Thiện**
**Mô tả:** Định luật tách biệt, phân rã độc lập, các trường hợp đặc biệt

**Nội dung:**
- Nền tảng di truyền học
- Định luật I & II của Mendel
- Phép lai test cross
- Cơ sở tế bào của di truyền

**Kỹ năng:**
- Hiểu khái niệm kiểu gen, kiểu hình
- Vẽ bảng Punnett
- Tính tỉ lệ di truyền
- Phân tích dữ liệu thí nghiệm

---

### 2️⃣ **Kiểu Gen, Kiểu Hình & Di Truyền Cơ Bản**
**Mô tả:** Hiểu biết sâu về kiểu gen, kiểu hình, dominan không toàn phần, đa alen

**Nội dung:**
- Phân biệt kiểu gen và kiểu hình
- Dominan hoàn toàn vs không toàn phần
- Codominance (dominan cộng gộp)
- Đa alen (nhóm máu ABO)

**Kỹ năng:**
- Xác định kiểu gen từ kiểu hình
- Dự đoán kiểu hình con đại
- Giải thích các trường hợp đặc biệt
- Phân tích di truyền con người

---

### 3️⃣ **Di Truyền Liên Kết Giới Tính & Liên Kết Gen**
**Mô tả:** Di truyền qua X, Y, liên kết gen, trao đổi chéo

**Nội dung:**
- Nhiễm sắc thể giới tính (XY)
- Di truyền X-linked (mù màu, hemophilia)
- Di truyền Y-linked
- Liên kết gen và trao đổi chéo

**Kỹ năng:**
- Phân tích di truyền liên kết giới tính
- Tính tần suất tái tổ hợp
- Xác định khoảng cách gen
- Giải quyết bài toán di truyền phức tạp

---

## 💾 Dữ Liệu Bài Học

Ứng dụng hiện đã bao gồm **600+ câu hỏi** được tổ chức:

- **3 chủ đề** × **2 phần** × **100 câu** = **600 câu**
- **Phần 1 (Củng cố):** Kéo thả, Ghép cột, Điền khuyết
- **Phần 2 (Tự luyện):** Trắc nghiệm 3 dạng
- **Giải thích chi tiết:** Cho TẤT CẢ đáp án (đúng và sai)

---

## 🎨 Thiết Kế Giao Diện

### Ngôn ngữ
- **Tiếng Việt hoàn toàn** - Thân thiện với học sinh Việt Nam

### Màu Sắc Chính
- 🔵 Xanh dương (#3B82F6) - Màu chính
- 💚 Xanh lá (#10B981) - Đúng/Thành công
- 🟠 Cam nhạt (#F59E0B) - Cảnh báo/Cần ôn lại
- ❤️ Đỏ (#EF4444) - Sai/Lỗi

### Phong Cách
- Hiện đại, thân thiện học sinh
- Tính khích lệ cao (khi đúng: 🎉, khi sai: 💡 gợi ý)
- Animation nhẹ khi chuyển câu
- Responsive trên mobile, tablet, desktop

### Không sử dụng
- ❌ localStorage, sessionStorage
- ❌ Browser storage APIs
- ✅ React useState / useReducer (state client-side)

---

## 🚀 Hướng Dẫn Sử Dụng

### Cho Giáo Viên (v0.app Project System Prompt)

**Bước 1: Chuẩn Bị Google Docs**
```
1. Mở file Word → File → Save as Google Docs
2. Nhấn Share → "Anyone with the link" → "Viewer"
3. Copy link
```

**Bước 2: Tạo Bài Học Trên v0.app**
```
1. Vào v0.dev → Tạo project mới
2. Dán toàn bộ System Prompt vào
3. Gửi link Google Docs vào chat
→ Chờ Claude tạo xong (~1-2 phút)
```

**Bước 3: Deploy & Chia Sẻ**
```
1. Nhấn Deploy → Copy link
2. Gửi link cho học sinh qua Zalo / Google Classroom
```

### Cho Học Sinh

**Bước 1:** Mở link từ giáo viên → Đăng nhập tài khoản v0.app  
**Bước 2:** Gõ **"bắt đầu học"** vào chat  
**Bước 3:** Giao diện bài học hiện ra → Tương tác trực tiếp  

✅ Không cần gửi thêm tin nhắn nào khác!

---

## 📊 Các Màn Hình Chính

### Màn Hình 1: Trang Chủ
- Giới thiệu nền tảng
- Số liệu: 3 chủ đề, 600 câu, 3 kỹ năng
- Nút "Bắt đầu học"

### Màn Hình 2: Chọn Chủ Đề
- Danh sách 3 chủ đề
- Mô tả mỗi chủ đề
- Số câu ở phần 1 & phần 2

### Màn Hình 3: Bài Học Tương Tác
- Thanh tiến trình (X / Y câu)
- Tên chủ đề & phần đang học
- Câu hỏi + đáp án + giải thích tức thì
- Nút "Câu tiếp theo"

### Màn Hình 4: Kết Quả & Phân Tích
- Điểm tổng (%)
- Điểm phần 1 & phần 2
- Phân tích chi tiết
- Nút "Làm lại" hoặc "Chọn chủ đề khác"

---

## 📝 Ví Dụ: Câu Hỏi Điển Hình

### Câu Trắc Nghiệm (Phần 2)
```
Câu: Trong thí nghiệm lai F₁ (Aa) × F₁ (Aa), tỉ lệ phenotype 
ở F₂ là bao nhiêu?

A. 1 : 1
B. 2 : 1
C. 3 : 1  ← ✓ Đúng
D. 1 : 1 : 1 : 1

🎉 Chính xác!
Aa × Aa → 1 AA : 2 Aa : 1 aa = 3 trội : 1 lặn = 3:1

Giải thích từng lựa chọn:
A. Sai. 1:1 là từ phép lai Test cross (Aa × aa)
B. Sai. 2:1 xuất hiện khi có gen gây chết...
C. ✓ Đúng! Áp dụng quy tắc cộng lại...
D. Sai. 1:1:1:1 là tỉ lệ từ dihybrid...
```

### Câu Điền Khuyết (Phần 1)
```
Hoàn thành: "Gien _____ là gien quy định tính trạng trội"

Trả lời: trội

💡 Giải thích:
Mendel phát hiện ra quy luật di truyền thông qua các 
thí nghiệm khoa học. Gien trội che phủ gien lặn ở 
dị hợp tử. Giảm phân là cơ sở tế bào của định luật 
tách biệt vì nó tách biệt các cặp gien.
```

---

## ⚙️ Công Nghệ Sử Dụng

- **Frontend:** React 19 + Next.js 16 (App Router)
- **UI Components:** shadcn/ui (Button, Card, Badge, Progress, Input, etc.)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State Management:** React useState Hook
- **Language:** TypeScript
- **Deployment:** Vercel

---

## 🔒 Bảo Mật & Quyền Riêng Tư

✅ **Không lưu trữ dữ liệu**
- Toàn bộ session lưu trong state (React)
- Không dùng localStorage, sessionStorage
- Khi reload page → state reset (bình thường)

✅ **Giao diện đơn giản, an toàn**
- Không có đăng nhập/mật khẩu riêng
- Sử dụng tài khoản v0.app của học sinh
- Không gửi data nhạy cảm

---

## 📈 Lợi Ích Cho Giáo Viên & Học Sinh

### Cho Giáo Viên
✅ Tạo bài học tương tác trong ~2 phút  
✅ Không cần code, không cần kỹ năng kỹ thuật  
✅ Tái sử dụng cho nhiều lớp/khóa học  
✅ Giáo viên chỉ cần chia sẻ link  

### Cho Học Sinh
✅ Giao diện tiếng Việt, thân thiện  
✅ Phản hồi tức thì cho mỗi đáp án  
✅ Giải thích chi tiết (không chỉ đáp án)  
✅ Khích lệ & tích cực (không chê bai)  
✅ Có thể làm lại chủ đề nhiều lần  

---

## 🎓 Tiêu Chuẩn Giáo Dục

Nội dung bài học tuân theo:
- 📚 **Chuẩn BGDĐT** - Bộ Giáo dục & Đào tạo Việt Nam
- 📖 **Chương trình THPT** - Sinh học lớp 12
- 🎯 **Kỹ năng ôn thi** - Phù hợp luyện thi Đại học

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
- ✅ Xóa cache trình duyệt (Ctrl + Shift + Delete)
- ✅ Reload page (F5)
- ✅ Thử trình duyệt khác (Chrome, Firefox, Safari)
- ✅ Kiểm tra quyền Google Docs ("Anyone with the link")

---

## 📄 Tài Liệu Tham Khảo

Bài học dựa trên:
1. **CĐ2.6-MENDEL-HOÀN-THIỆN** - Định luật Mendel
2. **LÝ-THUYẾT-VỀ-QLDT** - Kiểu gen, kiểu hình
3. **CĐ-2.7-LKG-HVG** - Cộng đồng, di truyền quần thể
4. **CĐ-2.8-DI-TRUYỀN-GIỚI-TÍNH** - Liên kết giới tính, liên kết gen

---

**Phiên bản:** 1.0  
**Cập nhật lần cuối:** 2024  
**Ngôn ngữ:** Tiếng Việt  

Chúc bạn học tập vui vẻ! 🎓✨
