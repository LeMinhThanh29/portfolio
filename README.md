# Portfolio

## Giới thiệu

Xin chào, tôi là **Le Minh Thanh**, một **lập trình viên Full Stack** từ **Ho Chi Minh City, Vietnam**. Tôi chuyên về **phát triển web** với các công nghệ như **Java Spring Boot** cho backend và **ReactJS** và **VueJS** cho frontend. Portfolio này sẽ giới thiệu một số dự án tôi đã tham gia, các kỹ năng tôi sở hữu, và các công nghệ tôi đã sử dụng.

---

## Các Dự Án Nổi Bật

### 1. **CoreImport System**
   - **Mô tả**: Hệ thống tích hợp dữ liệu cho **Mobifone Region 9**, hỗ trợ nhập và quản lý dữ liệu người dùng và phần thưởng, với khả năng tùy chỉnh các trường dữ liệu và xuất ra file Excel.
   - **Vai trò**: **Intern Frontend Developer**.
   - **Công nghệ**: React, Vue.js, JavaScript, HTML, CSS, Git.
   - **Link GitHub**: [CoreImport System](https://github.com/LeMinhThanh29/CoreImport)

### 2. **VieclamZalo**
   - **Mô tả**: Nền tảng giúp người dùng tham gia các nhiệm vụ kiếm tiền qua Zalo. Công việc của tôi bao gồm thiết kế giao diện, phát triển frontend và tích hợp API.
   - **Vai trò**: **Frontend Developer**.
   - **Công nghệ**: Vue.js, HTML, CSS, JavaScript, Git.
   - **Link GitHub**: [VieclamZalo](https://github.com/webstudio/ecommerce-platform)

### 3. **Honto Application**
   - **Mô tả**: Ứng dụng thương mại điện tử bán sách và nội dung số. Công việc của tôi bao gồm phát triển API sử dụng **Java** và **Spring Boot**, tích hợp với CMS và kiểm thử ứng dụng.
   - **Vai trò**: **Backend Developer**.
   - **Công nghệ**: Java, Spring Boot, SQL, Oracle, Doma, Git.
   - **Link GitHub**: [Honto.jp](https://honto.jp/)

---

## Kỹ Năng và Công Nghệ

- **Frontend**: ReactJS, VueJS, HTML, CSS, JavaScript.
- **Backend**: Java, Spring Boot, SQL, Oracle.
- **Version Control**: Git, GitHub.
- **Other Tools**: Docker, Postman, Figma, GitLab, JIRA.

---

## Hướng Dẫn Cài Đặt

Để chạy các dự án trong portfolio này trên máy tính của bạn, làm theo các bước sau:

1. **Clone Repository**:

```bash
git clone https://github.com/LeMinhThanh29/portfolio.git
```

2. **Cài Đặt Các Gói Phụ Thuộc**:

- Di chuyển vào thư mục dự án:

```bash
cd portfolio
```

- Cài đặt các gói cần thiết:

```bash
npm install
```

3. **Chạy Ứng Dụng**:

- Để chạy ứng dụng trên localhost:

```bash
npm start
```

---

## Đóng Góp

Nếu bạn muốn đóng góp cho dự án, làm theo các bước sau:

1. Fork dự án này.
2. Tạo nhánh mới cho tính năng của bạn (`git checkout -b feature-new-feature`).
3. Commit các thay đổi của bạn (`git commit -am 'Add new feature'`).
4. Push nhánh lên GitHub (`git push origin feature-new-feature`).
5. Tạo pull request.

---

## Liên Hệ

Nếu bạn muốn liên hệ hoặc có bất kỳ câu hỏi nào về các dự án, vui lòng liên hệ với tôi qua:

- **Email**: [leminhthanhneo77@gmail.com](mailto:leminhthanhneo77@gmail.com)
- **LinkedIn**: [linkedin.com/in/leminhthanhneo77](https://www.linkedin.com/in/leminhthanhneo77)
- **GitHub**: [LeMinhThanh29](https://github.com/LeMinhThanh29)

---

## Cấu trúc dự án

Dưới đây là cấu trúc thư mục của các dự án trong portfolio:

```
portfolio/
│
├── public/                  # Các file công khai như index.html, favicon.ico, logo, v.v.
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/                     # Thư mục chứa mã nguồn chính của ứng dụng
│   ├── assets/              # Các tài nguyên như hình ảnh và biểu tượng
│   │   ├── icons/           # Biểu tượng ứng dụng
│   │   │   ├── home-icon.svg
│   │   │   ├── job-icon.svg
│   │   │   ├── logo.svg
│   │   │   └── message-icon.svg
│   │   └── img/             # Hình ảnh liên quan đến giao diện
│   │       ├── CSS3_Logo-700x794.png
│   │       ├── JavaScript_Logo-700x700.png
│   │       ├── React_logo_logotype_emblem.png
│   │       ├── Vue.js_Logo-700x606.png
│   │       └── spring-3-logo-png-transparent.png
│   ├── components/          # Các component React của ứng dụng
│   │   ├── Contact/         # Component liên hệ
│   │   │   ├── Contact.tsx
│   │   │   └── scss/        # SCSS cho component
│   │   ├── Feature/         # Component tính năng
│   │   │   ├── Feature.tsx
│   │   │   └── scss/
│   │   ├── Footer/          # Component footer
│   │   │   ├── Footer.tsx
│   │   │   └── scss/
│   │   ├── Header/          # Component header
│   │   │   ├── Heading.tsx
│   │   │   └── scss/
│   │   ├── Job/             # Component quản lý công việc
│   │   │   ├── Job.tsx
│   │   │   ├── JobItem.tsx
│   │   │   └── JobList.tsx
│   │   ├── Navigation/      # Component điều hướng
│   │   │   ├── Nav.tsx
│   │   │   └── scss/
│   │   ├── Project/         # Component quản lý dự án
│   │   │   ├── Project.tsx
│   │   │   ├── ProjectItem.tsx
│   │   │   └── ProjectList.tsx
│   │   ├── Roadmap/         # Component lộ trình
│   │   │   ├── RoadMap.tsx
│   │   │   └── scss/
│   │   ├── Skills/          # Component kỹ năng
│   │   │   ├── Skills.tsx
│   │   │   └── scss/
│   │   └── Switch/          # Component chuyển đổi
│   │       ├── Switch.tsx
│   │       └── scss/
│   ├── context/             # Các context sử dụng trong ứng dụng
│   │   └── Context.tsx
│   ├── model/               # Các mô hình dữ liệu
│   │   ├── ContextModel.ts
│   │   ├── ImageExport.ts
│   │   ├── InputModel.ts
│   │   ├── JobItemModel.ts
│   │   ├── ProjectModel.ts
│   │   ├── SkillsModel.ts
│   │   └── ...
│   ├── router/              # Các router cho ứng dụng
│   │   └── DynamicRouter.tsx
│   ├── utils/               # Các hàm tiện ích
│   │   └── DateFormatter.ts
│   ├── App.tsx              # Entry point của ứng dụng
│   ├── index.tsx            # File entry point chính
│   ├── index.css            # CSS chung cho ứng dụng
│   └── reportWebVitals.ts   # Báo cáo hiệu suất ứng dụng
│
├── package.json             # Cấu hình gói và phụ thuộc
├── tsconfig.json            # Cấu hình TypeScript
├── package-lock.json        # Phiên bản các phụ thuộc
└── README.md                # Tệp README

```

