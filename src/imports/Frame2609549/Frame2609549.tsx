import svgPaths from "./svg-va7a8d4aod";

function Component9X0LoITif() {
  return (
    <div className="absolute inset-[-0.07%_0.04%_0.02%_-0.03%]" data-name="9X0loI.tif">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9945 65.0273">
        <g id="9X0loI.tif">
          <path d={svgPaths.p2277bb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute h-[65px] left-[29px] overflow-clip top-[23px] w-[55px]" data-name="Layer_1">
      <Component9X0LoITif />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[112px]">
      <div className="absolute left-0 size-[112px] top-0">
        <div className="absolute inset-[2.21%_6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.9948 107.05">
            <foreignObject height="147.05" width="136.995" x="-20" y="-20">
              <div style={{ backdropFilter: "blur(10px)", clipPath: "url(#bgblur_0_405_46_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p279c0500} fill="url(#paint0_linear_405_46)" id="Polygon 3" data-figma-bg-blur-radius="20" />
            <defs>
              <clipPath id="bgblur_0_405_46_clip_path" transform="translate(20 20)">
                <path d={svgPaths.p279c0500} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_405_46" x1="48.4974" x2="48.4974" y1="-2.47521" y2="109.525">
                <stop stopColor="#9462FB" />
                <stop offset="1" stopColor="#F86880" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Layer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['SVN-Zona_Pro:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-black whitespace-nowrap text-[16px]">Tư duy hệ sinh thái</p>
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