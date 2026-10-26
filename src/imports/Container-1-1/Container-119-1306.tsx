import imgImageTngGiamDc from "./a2a9fe4fbc2ed42e37067210614a885e9ea4feb9.png";

function ImageTngGiamDc() {
  return (
    <div className="h-[421px] relative shrink-0 w-full" data-name="Image (Tổng giám đốc)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTngGiamDc} />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[331px] relative rounded-[32px] shrink-0 w-[330px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageTngGiamDc />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,170,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#1eaaff] h-[2px] shrink-0 w-[32px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[137.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#1eaaff] text-[12px] top-0 tracking-[1.2px] uppercase whitespace-nowrap">Command Center</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[48px] left-0 not-italic text-[#131313] text-[32px] top-0 whitespace-nowrap">Ông Nguyễn Văn Tuấn</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute bg-clip-text font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[transparent] top-0 whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(30, 170, 255) 0%, rgb(54, 166, 255) 7.1429%, rgb(70, 161, 255) 14.286%, rgb(81, 156, 254) 21.429%, rgb(91, 152, 254) 28.571%, rgb(100, 147, 254) 35.714%, rgb(107, 142, 254) 42.857%, rgb(114, 137, 253) 50%, rgb(120, 132, 253) 57.143%, rgb(126, 127, 253) 64.286%, rgb(131, 121, 252) 71.429%, rgb(136, 116, 252) 78.571%, rgb(140, 110, 252) 85.714%, rgb(144, 104, 251) 92.857%, rgb(148, 98, 251) 100%)" }}>
        Tổng giám đốc
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[135px] relative shrink-0 w-[492.266px]" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#7a7a7a] text-[15px] top-0 w-[493px]">Ông là một trong những người tiên phong TMĐT tại Việt Nam, từng giữ chức Phó TGĐ VCCorp và Chủ tịch eCAP Holding. Ông đồng sáng lập nhiều nền tảng lớn như rongbay.com, muachung.vn, wepay.vn, Lotus… và tham gia phát triển ví điện tử bán lại cho Alipay, Gojek.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#7a7a7a] text-[15px] w-[493px]">Tại VCCorp, ông góp phần xây dựng tập đoàn internet hơn 2.000 nhân sự với các lĩnh vực TMĐT, quảng cáo, báo điện tử, game,</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[492.266px]">
      <Container2 />
      <Heading />
      <Paragraph />
      <Container4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Container1 />
      <Frame />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] min-h-px min-w-px not-italic relative text-[#7a7a7a] text-[15px]">{` chuyển đổi số. Sau đó, ông sáng lập eCAP Holding với các dự án fintech, du lịch, AI và blockchain toàn cầu.`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[27px] min-h-px min-w-px not-italic relative text-[#7a7a7a] text-[15px]">Với gần 20 năm kinh nghiệm, ông vừa am hiểu công nghệ vừa sắc bén về chiến lược, marketing, được mệnh danh là “builder” biến ý tưởng thành hiện thực, đồng thời là cố vấn cho nhiều starup và diễn giả uy tín trong nhiều hội thảo trong nước và quốc tế.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[44px] left-[-117.87px] top-0 w-[118px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="absolute h-[44px] overflow-clip right-[0.53px] rounded-[33554400px] shadow-[0px_0px_15px_0px_rgba(30,170,255,0.3)] top-0 w-[117.734px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(30, 170, 255) 0%, rgb(54, 166, 255) 7.1429%, rgb(70, 161, 255) 14.286%, rgb(81, 156, 254) 21.429%, rgb(91, 152, 254) 28.571%, rgb(100, 147, 254) 35.714%, rgb(107, 142, 254) 42.857%, rgb(114, 137, 253) 50%, rgb(120, 132, 253) 57.143%, rgb(126, 127, 253) 64.286%, rgb(131, 121, 252) 71.429%, rgb(136, 116, 252) 78.571%, rgb(140, 110, 252) 85.714%, rgb(144, 104, 251) 92.857%, rgb(148, 98, 251) 100%)" }} data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[21px] left-[59px] not-italic text-[14px] text-center text-white top-[10.5px] whitespace-nowrap">Thu gọn</p>
      <Container7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[44px] relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[rgba(30,170,255,0.1)] blur-[40px] right-[0.27px] rounded-[33554400px] size-[128px] top-0" data-name="Container" />;
}

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[32px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[48px] relative rounded-[inherit] size-full">
        <Frame2 />
        <Frame3 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,170,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}