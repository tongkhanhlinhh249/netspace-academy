NETSPACE — Style Guideline (Tailwind CSS)
1. Overview
1.1. Design Principles
Modern & Visionary: Giao diện truyền tải tinh thần đổi mới, phù hợp với định hướng công nghệ và truyền thông.

Vibrant & Accessible: Sử dụng dải màu gradient và màu nhấn (primary, secondary, accent) để tạo sự nổi bật, kết hợp không gian trắng để cần bằng thị giác.

"Reshaping The Future": Mọi chi tiết từ motion đến typography đều hướng tới sự hiện đại, mượt mà và tương lai.

1.2. Target Experience
Focus & Flow: Dẫn dắt người dùng qua từng câu chuyện của thương hiệu (từ Hero đến Liên hệ) một cách liền mạch.

Responsive & Lightweight: Tối ưu hóa trên mọi thiết bị, đảm bảo các component UI hoạt động nhanh chóng và ổn định.

2. Layout System
2.1. Container
Sử dụng max-width chuẩn theo yêu cầu của công ty để nội dung đồng nhất trên các màn hình desktop.

Mặc định: max-w-[1140px]

Căn giữa: mx-auto

Padding 2 bên: px-4 sm:px-6 lg:px-8

2.2. Grid System
Hệ thống lưới 12 cột (12-column grid) kinh điển linh hoạt cho layout section.

Cơ bản: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8

2.3. Spacing System
Sử dụng thang đo mặc định của Tailwind (base 4px).

Component (Card nội bộ): p-6 (24px), p-8 (32px)

Section (Khoảng cách giữa các khối): py-16 lg:py-24 (64px - 96px)

3. Breakpoints
Thiết lập chuẩn Mobile-first:

sm: 640px (Điện thoại lớn / Tablet dọc)

md: 768px (Tablet ngang)

lg: 1024px (Laptop nhỏ)

xl: 1140px (Desktop tiêu chuẩn theo chuẩn container của NETSPACE)

2xl: 1536px (Màn hình lớn)

4. Typography
4.1. Font Family
Toàn hệ thống (Display & Body): Be Vietnam Pro (Tối ưu hiển thị tiếng Việt, hiện đại và thân thiện).

4.2. Type Scale
H1 (Hero): text-5xl md:text-6xl font-bold leading-tight tracking-tight text-dark

H2 (Section Title): text-3xl md:text-4xl font-bold leading-snug text-dark

H3 (Card Title): text-xl md:text-2xl font-semibold text-dark

Body Large: text-lg text-text leading-relaxed

Body Normal: text-base text-text

Caption/Small: text-sm text-text opacity-80

5. Color System
5.1. Brand Colors
Hệ màu được ánh xạ trực tiếp từ CSS Variables gốc của hệ thống.

Primary: #1EAAFF (Blue)

Secondary: #9462FB (Purple)

Accent: #6ADBE3 (Cyan)

5.2. Semantic & Neutral Colors
Text Color: #7A7A7A (Gray)

Highlight/Danger: #F86880 (Pink/Red)

Highlight/Warning: #FAE096 (Yellow)

Dark: #000000

Light: #FFFFFF

5.3. Tailwind Config
JavaScript
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1EAAFF',
        secondary: '#9462FB',
        accent: '#6ADBE3',
        text: '#7A7A7A',
        danger: '#F86880',
        warning: '#FAE096',
        dark: '#000000',
        light: '#FFFFFF',
      },
      maxWidth: {
        'container': '1140px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 30px -5px rgba(30, 170, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
5.4. Usage Rules
Background web mặc định là bg-light (#FFFFFF).

Chữ đoạn văn (p) mặc định dùng màu text-text (#7A7A7A), tiêu đề (h1-h6) dùng text-dark (#000000).

Nút CTA chính sử dụng bg-primary text-light.

Các gradient hiện đại có thể tạo bằng: bg-gradient-to-r from-primary to-secondary.

6. Components
6.1. Buttons
HTML
<button class="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg text-light bg-primary hover:bg-[#1590d9] shadow-soft hover:shadow-hover transition duration-300">
  Nhận tư vấn ngay
</button>

<button class="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg text-light bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition duration-300">
  Khám phá hệ sinh thái
</button>

<button class="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition duration-300">
  Xem chi tiết
</button>
6.2. Card
HTML
<div class="bg-light rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 group">
  <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-light transition-colors duration-300">
    </div>
  <h3 class="text-xl font-bold text-dark mb-3">Tên sản phẩm / Dịch vụ</h3>
  <p class="text-text text-base leading-relaxed">
    Mô tả ngắn gọn về sản phẩm và dịch vụ của NETSPACE, giúp định hình tương lai số.
  </p>
</div>
6.3. Tag / Label
HTML
<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-[#3db1b8]">
  New Feature
</span>
6.4. Input / Form
HTML
<div class="space-y-2">
  <label for="name" class="block text-sm font-semibold text-dark">Họ và tên</label>
  <input type="text" id="name" class="block w-full rounded-lg border-gray-200 bg-gray-50 text-dark focus:bg-light focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-base px-4 py-3 transition-all outline-none" placeholder="Nhập tên của bạn">
</div>
7. Layout Sections
7.1. Header (Glassmorphism Style)
Sử dụng hiệu ứng lớp phủ kính xuyên thấu để giữ sự kết nối với nội dung phía dưới khi scroll.
HTML
<header class="fixed w-full bg-light/90 backdrop-blur-md z-50 border-b border-gray-100">
  <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-0">
    <div class="flex justify-between items-center h-20">
      <a href="/" class="flex-shrink-0 text-2xl font-bold text-dark tracking-tighter">
        NETSPACE<span class="text-primary">.</span>
      </a>
      
      <nav class="hidden md:flex space-x-8 items-center">
        <a href="/" class="text-primary font-semibold transition-colors">Trang chủ</a>
        <a href="/about" class="text-text hover:text-primary font-medium transition-colors">Về chúng tôi</a>
        <a href="/news" class="text-text hover:text-primary font-medium transition-colors">Tin tức</a>
        <a href="/careers" class="text-text hover:text-primary font-medium transition-colors">Tuyển dụng</a>
        <a href="/contact" class="text-text hover:text-primary font-medium transition-colors">Liên hệ</a>
      </nav>

      <div class="flex items-center space-x-4">
        <div class="hidden sm:flex items-center space-x-2 text-sm font-medium border border-gray-200 rounded-lg p-1">
          <button class="px-2 py-1 bg-primary text-light rounded shadow-sm">VI</button>
          <button class="px-2 py-1 text-text hover:text-dark transition">EN</button>
        </div>
        </div>
    </div>
  </div>
</header>
7.2. Hero Section
HTML
<section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-light overflow-hidden">
  <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-0 relative z-10 text-center">
    <span class="inline-block text-secondary font-bold tracking-wider uppercase mb-4 text-sm">Welcome to Netspace</span>
    <h1 class="text-5xl md:text-6xl font-bold text-dark tracking-tight mb-6">
      Reshaping The <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
    </h1>
    <p class="mt-4 max-w-2xl text-lg text-text mx-auto mb-10">
      Cung cấp các giải pháp truyền thông và công nghệ đột phá, đồng hành cùng doanh nghiệp kiến tạo những giá trị bền vững trong kỷ nguyên số.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <button class="px-8 py-4 bg-primary hover:bg-[#1590d9] text-light rounded-lg font-semibold text-lg shadow-hover transition-all">
        Khám phá Dịch vụ
      </button>
      <button class="px-8 py-4 bg-white text-dark rounded-lg font-semibold text-lg border border-gray-200 hover:border-primary hover:text-primary transition-all">
        Liên hệ tư vấn
      </button>
    </div>
  </div>
</section>
8. Page Templates
8.1. Homepage Structure
Trang chủ được chia thành các Section theo thứ tự flow người dùng:

Hero Section: Thông điệp chính "Reshaping The Future" và nút CTA.

Section Sản phẩm và Dịch vụ: Grid hiển thị các core services của công ty (Sử dụng component Card).

Hệ sinh thái truyền thông: Sơ đồ/Layout đặc biệt (có thể dùng grid bất đối xứng) mô tả sự liên kết giữa các giải pháp.

Đối tác & Khách hàng tin tưởng: Logo grid (Marquee auto-scroll hoặc grid tĩnh) dùng ảnh trắng đen hoặc logo gốc.

Khách hàng nói gì về Netspace (Testimonials): Slider/Carousel chứa các review, đánh giá (dùng thẻ Card kết hợp icon quote màu accent).

Liên hệ tư vấn (CTA Section): Khối Form kết hợp thông tin liên hệ, sử dụng background tối (bg-dark) hoặc bg-primary để tạo điểm nhấn chốt sale.

Footer: Links điều hướng, bản đồ, thông tin bản quyền và mạng xã hội.

9. Responsive Rules
Container: Container sử dụng max-w-[1140px], tự động căn lề giữa (mx-auto) và có padding an toàn 16px-24px ở các màn hình nhỏ hơn.

Typography: Các Title (H1, H2) sẽ tự động thu nhỏ trên Mobile để tránh rớt dòng xấu (vd: text-3xl md:text-5xl).

Header: Ẩn toàn bộ menu links và thay bằng Hamburger menu khi width < 768px. Khối đổi ngôn ngữ có thể đưa vào trong Drawer Menu.

Grid Layout: - Các section Dịch vụ/Hệ sinh thái: grid-cols-1 trên Mobile -> grid-cols-2 trên Tablet -> grid-cols-3 hoặc grid-cols-4 trên Desktop.

10. Motion & Interaction
Smooth Flow: Mọi trạng thái Hover của Buttons, Links, Cards đều dùng transition-all duration-300.

Card Hover: Các Card dịch vụ khi hover sẽ nhấc lên nhẹ hover:-translate-y-2 và xuất hiện bóng đổ dùng màu primary hover:shadow-hover.

Scroll Reveal: Khuyến nghị dùng AOS. Các section bên dưới Hero nên có animation fade-up (opacity-0 translate-y-8 -> opacity-100 translate-y-0) khi scroll tới để tạo cảm giác mượt mà và cao cấp.

11. Code Convention
Cấu trúc Class: (1) Layout -> (2) Spacing -> (3) Size -> (4) Typography -> (5) Visual (bg, border, color) -> (6) Effects/Transition.

Sử dụng các màu đã định nghĩa trong tailwind.config.js thay vì dùng mã HEX cứng trong HTML (vd: dùng text-primary thay vì text-[#1EAAFF]).

Tách các Section lớn trên Homepage thành các file/component riêng (vd: Hero.jsx, Services.jsx, Testimonials.jsx) để dễ quản lý.