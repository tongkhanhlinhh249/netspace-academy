import svgPaths from "./svg-6iveic3aht";
import imgImageNetSpaceLogo from "figma:asset/b04cc769a8804b323dedfa2e0c3da91e74ca94db.png";
import imgEllipse1495 from "figma:asset/c4aadffadb3864cece4dffe7be6f9b7a77a47e0c.png";
import imgEllipse1496 from "figma:asset/4d38d4e9b944405bd3fa5f4718d33c6c2d5605fe.png";
import imgEllipse1497 from "figma:asset/38a4b82388da65cf8cb2ad151b5ce824679e56ed.png";

function ImageNetSpaceLogo() {
  return (
    <div className="h-[48px] relative shrink-0 w-[202.594px]" data-name="Image (NetSpace Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNetSpaceLogo} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[26px] min-w-px not-italic relative text-[16px] text-white">Công ty công nghệ - truyền thông - quảng cáo - tư vấn chiến lược. Kiến tạo hệ sinh thái toàn diện cho doanh nghiệp Việt Nam.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_182_118)" id="Icon">
          <path d={svgPaths.p1514e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_182_118">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="Link">
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Link />
      <a className="block font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap" href="https://www.facebook.com/baonhaofficial" target="_blank">
        <p className="cursor-pointer text-[14px]">
          <span className="leading-[24px]">F</span>
          <span className="leading-[24px]">acebook</span>
        </p>
      </a>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse1495} width="32" />
      </div>
      <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] min-w-px not-italic relative text-[14px] text-white">NetSpace siêu Nét</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[121px]">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_182_125)" id="Icon">
          <path d={svgPaths.p7d0ab00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_182_125">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="Link">
      <Icon1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Link1 />
      <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">LinkedIn</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px relative w-full">
      <div className="relative shrink-0 size-[32px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse1496} width="32" />
      </div>
      <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Nách Két</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[112px]">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Link">
          <rect fill="var(--fill-0, white)" fillOpacity="0.1" height="32" rx="16" width="32" />
          <path d={svgPaths.p18d7da00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Link2 />
      <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Tiktok</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px relative w-full">
      <div className="relative shrink-0 size-[32px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgEllipse1497} width="32" />
      </div>
      <div className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[24px] mb-0 whitespace-pre">{`Hậu Cung `}</p>
        <p className="leading-[24px] whitespace-pre">Văn Phòng Truyện</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Frame8 />
        <Frame7 />
        <Frame9 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.7px] uppercase whitespace-nowrap">NetSpace on Social</p>
      <Frame />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Container">
      <ImageNetSpaceLogo />
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[482px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[normal] left-0 not-italic text-[16px] text-white top-0 tracking-[0.7px] uppercase whitespace-nowrap">THÔNG TIN LIÊN HỆ</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[446px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-0 whitespace-nowrap">Địa chỉ</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[446px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[16px] text-white top-0 w-[446px]">Tầng 3, Tòa nhà Mipec, 229 Tây Sơn, Phường Kim Liên, Hà Nội</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[73.5px] items-start left-[36px] top-0 w-[446px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[482px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_182_115)" id="Icon">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_182_115">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[105.906px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-0 whitespace-nowrap">Hotline</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[52px] items-start left-[36px] top-0 w-[105.906px]" data-name="Container">
      <Paragraph3 />
      <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] min-h-px not-italic relative text-[16px] text-white w-[106px]">0888 138 888</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[52px] relative shrink-0 w-[482px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-0 whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[175.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-0 whitespace-nowrap">contact@netspace.vn</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[52px] items-start left-[36px] top-0 w-[175.016px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[52px] relative shrink-0 w-[482px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <Container11 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container6 />
        <Container8 />
        <Container10 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[269.5px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[81px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[256.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">Website thuộc sở hữu bởi: NETSPACE.</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[404.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">© 2025 NETSPACE Technology Co., Ltd. Bảo lưu mọi quyền.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[32px] pt-[64px] px-[32px] relative size-full">
        <Container1 />
        <Container12 />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start px-[197px] relative size-full" style={{ backgroundImage: "linear-gradient(162.184deg, rgb(30, 160, 247) 0%, rgb(57, 156, 248) 7.1429%, rgb(74, 151, 248) 14.286%, rgb(87, 146, 249) 21.429%, rgb(98, 141, 250) 28.571%, rgb(107, 136, 251) 35.714%, rgb(115, 131, 251) 42.857%, rgb(123, 126, 252) 50%, rgb(127, 122, 252) 57.143%, rgb(131, 119, 252) 64.286%, rgb(135, 115, 252) 71.429%, rgb(138, 111, 251) 78.571%, rgb(142, 107, 251) 85.714%, rgb(145, 102, 251) 92.857%, rgb(148, 98, 251) 100%)" }} data-name="Footer">
      <Container />
    </div>
  );
}