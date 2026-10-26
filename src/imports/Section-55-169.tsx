import svgPaths from "./svg-dlfzt1faaa";
import imgImageWithFallback from "figma:asset/efbd27a49fe19cd95d8d846129afc7005bc98ae8.png";
import imgImageWithFallback1 from "figma:asset/6365b5b7cc8363c1a07940fd76469aa12163c033.png";
import imgImageWithFallback2 from "figma:asset/ece6a4511f63676edec4852d3433d766785879a5.png";

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[0] left-[545.84px] not-italic text-[48px] text-black text-center top-[-1px] whitespace-nowrap">
        <span className="leading-[48px]">{`Khách hàng nói gì về `}</span>
        <span className="leading-[48px] text-[#3b82f6]">NETSPACE</span>
      </p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[64px] relative rounded-[16px] shrink-0 w-[62.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#1e3a8a] text-[18px] top-[-1px] whitespace-nowrap">Nguyễn Minh Anh</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[0.35px] uppercase w-[206px]">CEO - TechViet Solutions</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[68px] relative shrink-0 w-[284px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[120_0_0] min-h-px min-w-px relative w-[284px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-0 w-[284px]">{`"NETSPACE giúp chúng tôi chuyển đổi số hoàn toàn hệ thống quản lý bán lẻ, tăng hiệu suất vận hành lên 40% chỉ trong 6 tháng. Đội ngũ cực kỳ chuyên nghiệp và tận tâm."`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#3b82f6] h-[36px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[61.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-white top-[8px] whitespace-nowrap">{` 5`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[53px] relative shrink-0 w-[284px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pt-[17px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[353px] items-start left-0 p-[32px] rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[348px]" data-name="Container">
      <Container4 />
      <Paragraph1 />
      <Container7 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[64px] relative rounded-[16px] shrink-0 w-[59.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#1e3a8a] text-[18px] top-[-1px] whitespace-nowrap">Trần Hoàng Nam</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] h-[40px] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[0.35px] uppercase w-full">Founder - Digital Media Hub</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[68px] relative shrink-0 w-[284px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[120_0_0] min-h-px min-w-px relative w-[284px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-0 w-[284px]">{`"Chiến lược truyền thông số của NETSPACE giúp thương hiệu tiếp cận hơn 5 triệu khách hàng mới trong chiến dịch ra mắt sản phẩm. Kết quả vượt xa mong đợi."`}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#3b82f6] h-[36px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[76.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-white top-[8px] whitespace-nowrap">{` 4.8`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[53px] relative shrink-0 w-[284px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pt-[17px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[353px] items-start left-[372px] p-[32px] rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[348px]" data-name="Container">
      <Container10 />
      <Paragraph2 />
      <Container13 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[64px] relative rounded-[16px] shrink-0 w-[56.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#1e3a8a] text-[18px] top-[-1px] whitespace-nowrap">Phạm Thị Hương</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[0.35px] uppercase w-[212px]">Marketing Director - BrandX</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[68px] relative shrink-0 w-[284px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="flex-[120_0_0] min-h-px min-w-px relative w-[284px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-0 w-[284px]">{`"Đội kỹ thuật của NETSPACE luôn hỗ trợ 24/7 và đảm bảo hệ thống vận hành ổn định với uptime 99.9%. Đây là đối tác công nghệ đáng tin cậy nhất chúng tôi từng làm việc."`}</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#3b82f6] h-[36px] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[76.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-white top-[8px] whitespace-nowrap">{` 4.9`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[53px] relative shrink-0 w-[284px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pt-[17px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[353px] items-start left-[744px] p-[32px] rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[348px]" data-name="Container">
      <Container16 />
      <Paragraph4 />
      <Container19 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[353px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container9 />
      <Container15 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[449px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[24px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start pt-[96px] px-[198px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}