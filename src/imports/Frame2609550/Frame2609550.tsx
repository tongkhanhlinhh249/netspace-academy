import svgPaths from "./svg-dlepn2ghub";

function Frame() {
  return (
    <div className="relative shrink-0 size-[112px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 112">
        <g id="Frame 92">
          <foreignObject height="147.05" width="136.995" x="-12.4974" y="-17.5248">
            <div style={{ backdropFilter: "blur(10px)", clipPath: "url(#bgblur_0_405_64_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p1fa71100} fill="url(#paint0_linear_405_64)" id="Polygon 3" data-figma-bg-blur-radius="20" />
          <path d={svgPaths.p196ff000} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <path d={svgPaths.p233800} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <path d={svgPaths.pc451440} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <path d={svgPaths.p37ed8b20} fill="var(--fill-0, #DEF6FF)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="bgblur_0_405_64_clip_path" transform="translate(12.4974 17.5248)">
            <path d={svgPaths.p1fa71100} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_405_64" x1="56" x2="56" y1="0" y2="112">
            <stop stopColor="#9462FB" />
            <stop offset="1" stopColor="#F86880" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[269px]">
      <p className="font-['SVN-Zona_Pro:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-black w-full text-[16px]">Kết hợp đa chiều</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}