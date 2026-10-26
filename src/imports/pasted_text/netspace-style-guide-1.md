NETSPACE — Style Guideline (Tailwind CSS)
Theme: Cosmic Exploration & Futuristic Spaceship

1. Overvie   w
1.1. Design Principl   es
Cosmic Vision (Tầm nhìn vũ trụ): Giao diện không chỉ là web, mà là một "cửa sổ phi thuyền" nhìn ra tương lai. Sử dụng chiều sâu của không gian để dẫn dắt câu chuyện.

Vibrant & Accessible: Gradient từ Blue sang Purple mô phỏng các dải tinh vân (Nebula), kết hợp với không gian trắng (White space) sạch sẽ như nội thất tàu vũ trụ hiện đại.

"Reshaping The Future": Sự chuyển động mềm mại của các thiên thể và sự chính xác của cơ khí tàu vũ trụ.

1.2. Brand Concept: Spaceship Interior & Deep Space
Visual Metaphor: Website được thiết kế như một bảng điều hành (Command Center) của tàu vũ trụ.

Glassmorphism: Hiệu ứng kính của buồng lái (Cockpit), cho thấy sự xuyên thấu và kết nối giữa con người và không gian vô tận.

2.    Layout System   
2.1. Container
Max-width: max-w-[1140px]

Logic: Nội dung được đóng gói gọn gàng như các module trong khoang tàu.

2.2. Grid System
12-column grid. Các đường lưới (grid lines) có thể xuất hiện mờ nhạt như hệ thống tọa độ định vị v   ũ trụ.

4. Typography
4.1. Fon   t Family: Be Vietnam Pro
Phông chữ không chân (sans-serif) hiện đại, gợi liên tưởng đến các bảng hiển thị kỹ thuật số trên tàu vũ trụ.

5. Co   lor System (Cosmic    Palette)
5.1. Brand Colors
Primary (#1EAAFF): Blue - Màu của các vì sao trẻ và năng lượng Plasma.

Secondary (#9462FB): Purple - Màu của tinh vân và chiều sâu không gian.

Accent (#6ADBE3): Cyan - Màu của hệ thống laser và màn hình holographic.

5.2. Nebula Gradients (Special addition)
Dùng cho Hero hoặc các điểm nhấn quan trọng:

Deep Space: from-[#1EAAFF] via-[#9462FB] to-[#000000]

Warp Speed: from-primary    to-accent

6. Components (Spac   eship UI)
6.1. Buttons (Propulsion System)
Các nút bấm có hiệu ứng phát sáng (Glow) như động cơ phản lực.

HTML
<button class="relative overflow-hidden group px-8 py-3 font-bold rounded-full text-light bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(30,170,255,0.4)] hover:shadow-[0_0_30px_rgba48,98,251,0.6)] transition-all duration-500">
  <span
 class="relative z-10">Phóng vào Tương lai</span>
  <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
6.2. Card (Space Modul
es)
Mô phỏng các khoang (Pods) của tàu vũ trụ.

HTML
<div class="bg-light/80 backdrop-blur-md rounded-2xl p-8 border border-primary/20 shadow-soft hover:border-primary/50 transition-all duration-500">
  <div class="relative w-16 h-16 mb-6">
    <div class="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
    <div class="relative z-10 flex items-center justify-center h-full text-primary">
      <svg>...</svg>
    </div>
  </div>
  <h3 class="text-xl font-bold text-dark">Module Dịch vụ</h3>
</div>
7. Layout Sections (The Journey)
7.1. Header (The Cockpit View)
Sử dụng Glassmorp
hism để người dùng cảm thấy như đang nhìn qua kính buồng lái.

HTML
<header class="fixed w-full top-0 z-50 bg-light/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
  </header>
7.2. Hero Section (Launch Pad)
Tạo hiệu ứng chiều sâu bằng cách sử dụng các hạt (particles) lơ lửng.

Background: Màu trắng sạch nhưng có các hạt accent mờ ảo lơ lửng (floating).

Slogan: "Reshaping The Future" với hiệu ứng gradient chuyển động chậm.

7.3. Section Hệ sinh thái truyền thông (The Galaxy Map)
Thay vì các khối vuông thông thường, sử dụng các đường line nối (Orbit lines) giữa các dịch vụ để mô phỏng một bản đồ thiên hà (Galaxy Map).

7.4. Đối tác & Khách hàng (The Space Station)
Nơi hội tụ của     các thực thể lớn trong vũ trụ NETSPACE.

10. Motion & Interaction (Space Physics)
Floating Effect (Không trọng lực): Các icon hoặc hình ảnh minh họa có chuyển động lên xuống nhẹ nhàng (animate-bounce chậm hoặc custom CSS keyframes).

Warp Speed Scroll: Khi scroll qua các section, sử dụng hiệu ứng lướt nhanh của các đường line mỏng (parallax).

Orbit Rotation: Các yếu tố trang trí dạng vòng tr    òn (như viền icon) xoay chậm quanh tâm.

11. Visual Concept Elements (The "Space" Assets)
Để đúng chất "Không gian & Tàu vũ trụ", thiết kế cần bổ sung:

Họa tiết lưới (Grid/Blueprint): Sử dụng các pattern dấu cộng (+) nhỏ hoặc lưới mờ ở background để gợi nhắc về bản đồ kỹ thuật.

Hành tinh & Vệ tinh: Sử dụng các hình khối tròn mờ (Blurry Blobs) màu primary và secondary ở các góc trang để tạo chiều sâu không gian.

Hệ thống Icon: Sử dụng nét mảnh (thi    n line), bo góc hiện đại, tích hợp các chi tiết kỹ thuật (tọa độ, radar).

12. Notes cho Developer
Z-index: Header luôn ở z-50. Các yếu tố "lơ lửng" (floating pablur-md hoặc lg cho các phần tử Glassmorphism để không bị rối chữ khi đè lên hình ảnh thiên hà bên dưới.

Gradient Animation: Sử dụng keyframes để thay đổi background-position cho các dải màu gradient trên nút bấm, tạo cảm giác năng lượng đang chảy.