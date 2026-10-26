import svgPaths from "./svg-gfv1ylbvdl";
import imgImageWithFallback from "figma:asset/385349a732de760cf2d2b65c16f6a9d9380250d6.png";

function ImageWithFallback() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[169.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80.344px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1eaaff] text-[16px] top-0 whitespace-nowrap">Trang chủ</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(30,170,255,0.7)] top-0 whitespace-nowrap">Về chúng tôi</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.266px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(30,170,255,0.7)] top-0 whitespace-nowrap">Tin tức</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[90.156px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(30,170,255,0.7)] top-0 whitespace-nowrap">Tuyển dụng</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.469px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(30,170,255,0.7)] top-0 whitespace-nowrap">Liên hệ</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[507.875px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#1eaaff] h-[28px] left-[4px] rounded-[33554400px] shadow-[0px_0px_10px_0px_rgba(29,73,166,0.3)] top-[4px] w-[60px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_57)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p21d23a70} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.16667 7H12.8333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_57">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">VI</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[28px] items-center justify-center left-[4px] pl-[13.781px] pr-[13.797px] py-[6px] top-[4px] w-[60px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(30,170,255,0.7)] text-center whitespace-nowrap">EN</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[64px] pl-[21.641px] pr-[21.656px] py-[6px] top-[4px] w-[60px]" data-name="Button">
      <Text1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] border border-[rgba(29,73,166,0.2)] border-solid h-[38px] left-0 rounded-[33554400px] shadow-[0px_0px_15px_0px_rgba(29,73,166,0.1)] top-0 w-[130px]" data-name="Container">
      <Container3 />
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[130px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-between px-[25px] py-[13px] relative rounded-[33554400px] size-full" data-name="Root">
      <div aria-hidden="true" className="absolute border border-[rgba(29,73,166,0.1)] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_8px_32px_0px_rgba(29,73,166,0.15)]" />
      <Container />
      <Navigation />
      <Container1 />
    </div>
  );
}